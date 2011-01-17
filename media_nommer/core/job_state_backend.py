import random
import hashlib
import datetime
import simplejson
import boto
from boto.sqs.message import Message
from media_nommer.conf import settings
from media_nommer.utils.mod_importing import import_class_from_module_string

class AWSEncodingJob(object):
    """
    Serves as a base for encoding jobs on all backends.
    """
    def __init__(self, source_path, dest_path, nommer, job_options,
                 unique_id=None, job_state='PENDING', job_state_details=None,
                 notify_url=None, creation_dtime=None,
                 last_modified_dtime=None, backend=None):
        """
        Document me.
        """
        self.source_path = source_path
        self.dest_path = dest_path
        # __import__ doesn't like unicode, cast this to a str.
        self.nommer = import_class_from_module_string(str(nommer))(self)
        self.job_options = job_options
        self.unique_id = unique_id
        self.job_state = job_state
        self.job_state_details = job_state_details
        self.notify_url = notify_url
        self.creation_dtime = creation_dtime
        self.last_modified_dtime = last_modified_dtime

        # TODO: Get rid of this when AWSJobStateBackend becomes a static class.
        global JobStateBackend
        self.backend = JobStateBackend

        if isinstance(self.job_options, basestring):
            # If job_options is a string, it is JSON. De-code it and make it
            # a Python dict.
            self.job_options = simplejson.loads(self.job_options)

        self.job_state = self.backend.get_job_state_name_from_value(job_state)

        # SimpleDB doesn't store datetime objects. We need to do some
        # massaging to make this work.
        self.creation_dtime = self._get_dtime_from_string(self.creation_dtime)
        self.last_modified_dtime = self._get_dtime_from_string(self.last_modified_dtime)

    def __repr__(self):
        """
        String representation of the object. Just show the unique ID.
        """
        return u'EncodingJob: %s' % self.unique_id

    def _get_dtime_from_string(self, dtime):
        """
        If dtime is a string, try to parse and instantiate a date from it.
        If it's something else, just return the value without messing with it.
        """
        if isinstance(dtime, basestring):
            return datetime.datetime.strptime(dtime, '%Y-%m-%d %H:%M:%S.%f')
        # Not a string, just return it.
        return dtime

    def _generate_unique_job_id(self):
        """
        Since SimpleDB has no notion of primary keys or auto-incrementing
        fields, we have to create our own. Generate a unique ID for the job
        based on a bunch of values and a random salt.
        """
        random_salt = random.random()
        combo_str = "%s%s%s%s" % (self.source_path,
                                  self.dest_path,
                                  repr(self.job_options),
                                  random_salt)
        return hashlib.sha512(combo_str).hexdigest()[:50]

    def _send_state_change_notification(self):
        """
        Send a message to a state change SQS that lets feederd know to
        re-load the job from memory.
        """
        print "SENDING STATE CHANGE NOTIFICATION"
        sqs_message = Message()
        sqs_message.set_body(self.unique_id)
        JobStateBackend.aws_sqs_state_change_queue.write(sqs_message)

    def save(self):
        """
        Given an EncodingJob, save it to SimpleDB and SQS. 
        """
        # Is this a new job that needs creation?
        is_new_job = not self.unique_id
        # Generate this once so our microseconds stay the same from
        # creation time to updated time.
        now_dtime = datetime.datetime.now()

        if is_new_job:
            # This serves as the "FK" equivalent.
            self.unique_id = self._generate_unique_job_id()
            # Create the item in the domain.
            job = JobStateBackend.aws_sdb_domain.new_item(self.unique_id)
            # Start populating values.
            self.creation_dtime = now_dtime
            self.job_state = 'PENDING'
        else:
            # Retrieve the existing item for the job.
            job = JobStateBackend.aws_sdb_domain.get_item(self.unique_id)
            if job is None:
                msg = 'AWSEncodingJob.save(): ' \
                      'No match found in DB for ID: %s' % self.unique_id
                raise Exception(msg)

        if self.job_state_details and isinstance(self.job_state_details,
                                                 basestring):
            # Get within AWS's limitations. We'll assume that the error message
            # is probably near the tail end of the output (hopefully). Not
            # a great assumption, but it'll have to do.
            self.job_state_details = self.job_state_details[-1023:]

        job['unique_id'] = self.unique_id
        job['source_path'] = self.source_path
        job['dest_path'] = self.dest_path
        job['nommer'] = '%s.%s' % (self.nommer.__class__.__module__,
                                   self.nommer.__class__.__name__)
        print "CALCED NOMMER", job['nommer']
        job['job_options'] = simplejson.dumps(self.job_options)
        job['job_state'] = JobStateBackend.get_job_state_value_from_name(self.job_state)
        job['job_state_details'] = self.job_state_details
        job['notify_url'] = self.notify_url
        job['last_modified_dtime'] = now_dtime
        job['creation_dtime'] = self.creation_dtime
        print "PRE-SAVE ITEM", job

        job.save()

        if is_new_job:
            print "QUEING", job['unique_id']
            sqs_message = Message()
            sqs_message.set_body(job['unique_id'])
            JobStateBackend.aws_sqs_queue.write(sqs_message)

        return job['unique_id']

    def set_job_state(self, job_state, details=None):
        """
        Sets the job's state and saves it to the backend.
        """
        if not JobStateBackend.JOB_STATES.has_key(job_state):
            raise Exception('Invalid job state: %s' % job_state)

        self.job_state = job_state
        self.job_state_details = details

        # Write the changes to the backend.
        self.save()
        # Announce a change in state, if the backend supports such a thing.
        self._send_state_change_notification()

    def is_finished(self):
        """
        Returns True if this job is in a finished state.
        """
        # Break job states into a list of tuples: (job state name, value)
        finished_states = JobStateBackend.FINISHED_STATES
        # self.job_state returns the value from the DB, so just get the values.
        finished_states = [JobStateBackend.JOB_STATES[value] for value in finished_states]
        # If current state matches the list of unfinished values, unfinished.
        return self.job_state in finished_states

class AWSJobStateBackend(object):
    """
    This is a base class that can be sub-classed by each backend to serve
    as a foundation. Required methods raise a NotImplemented exception
    by default, unless overridden by child classes.
    """
    JOB_STATES = {
        'PENDING': 'PENDING',
        'DOWNLOADING': 'DOWNLOADING',
        'ENCODING': 'ENCODING',
        'UPLOADING': 'UPLOADING',
        'FINISHED': 'FINISHED',
        'ERROR': 'ERROR',
        'ABANDONED': 'ABANDONED',
    }
    # Any jobs in the following states are considered "finished" in that we
    # won't do anything else with them.
    FINISHED_STATES = ['FINISHED', 'ERROR', 'ABANDONED']

    # Start as a None value so we can lazy load.
    __aws_sdb_connection = None
    # Ditto.
    __aws_sdb_domain = None
    # Another ditto.
    __aws_sqs_connection = None
    # Triple ditto.
    __aws_sqs_queue = None
    # Lazy-loaded SQS queue for announcing state changes. Do not access
    # this directly, go through the similarly named property.
    __aws_sqs_state_change_queue = None

    @property
    def aws_sdb_connection(self):
        """
        Lazy-loading of the SimpleDB boto connection. Refer to this instead of
        referencing self.__aws_sdb_connection directly.
        
        :returns: A boto connection to Amazon's SimpleDB interface.
        """
        if not self.__aws_sdb_connection:
            self.__aws_sdb_connection = boto.connect_sdb(
                settings.AWS_ACCESS_KEY_ID,
                settings.AWS_SECRET_ACCESS_KEY)
        return self.__aws_sdb_connection

    @property
    def aws_sdb_domain(self):
        """
        Lazy-loading of the SimpleDB boto domain. Refer to this instead of
        referencing self.__aws_sdb_domain directly.

        :returns: A boto SimpleDB domain for this workflow.
        """
        if not self.__aws_sdb_domain:
            self.__aws_sdb_domain = self.aws_sdb_connection.create_domain(
                                        settings.SIMPLEDB_DOMAIN_NAME)
        return self.__aws_sdb_domain

    @property
    def aws_sqs_connection(self):
        """
        Lazy-loading of the SQS boto connection. Refer to this instead of
        referencing self._aws_sqs_connection directly.
        
        :returns: A boto connection to Amazon's SimpleDB interface.
        """
        if not self.__aws_sqs_connection:
            self.__aws_sqs_connection = boto.connect_sqs(
                settings.AWS_ACCESS_KEY_ID,
                settings.AWS_SECRET_ACCESS_KEY)
        return self.__aws_sqs_connection

    @property
    def aws_sqs_queue(self):
        """
        Lazy-loading of the SQS boto queue. Refer to this instead of
        referencing self.__aws_sqs_queue directly.

        :returns: A boto SQS queue.
        """
        if not self.__aws_sqs_queue:
            self.__aws_sqs_queue = self.aws_sqs_connection.create_queue(
                settings.SQS_QUEUE_NAME)
        return self.__aws_sqs_queue

    @property
    def aws_sqs_state_change_queue(self):
        """
        Lazy-loading of the SQS boto queue. Refer to this instead of
        referencing self._aws_sqs_queue directly.

        :returns: A boto SQS queue.
        """
        if not self.__aws_sqs_state_change_queue:
            self.__aws_sqs_state_change_queue = self.aws_sqs_connection.create_queue(
                settings.SQS_JOB_STATE_CHANGE_QUEUE_NAME)
        return self.__aws_sqs_state_change_queue

    def _get_job_object_from_item(self, item):
        """
        Given an SDB item, instantiate and return an EncodingJob.
        """
        # Add a reference to this backend object for the job to use.
        item['backend'] = self
        # Pass the SDB item as a dict to be used as args to constructor.
        job = AWSEncodingJob(**item)
        return job

    def get_job_object_from_id(self, unique_id):
        """
        Given a job's unique ID, return an EncodingJob instance.
        """
        item = self.aws_sdb_domain.get_item(unique_id)
        if item is None:
            msg = 'AWSJobStateBackend.get_job_object_from_id(): ' \
                  'No unique ID match for: %s' % unique_id
            raise Exception(msg)

        return self._get_job_object_from_item(item)

    def get_job_state_name_from_value(self, value):
        """
        Given the db value (value in JOB_STATES dict) of a job state, return
        the name (key in JOB_STATES dict). If no match is found, raise
        an exception.
        """
        for state_name, state_value in self.JOB_STATES.items():
            if value == state_value:
                return state_name
        raise Exception('Invalid job state value: %s' % value)

    def get_job_state_value_from_name(self, name):
        """
        Given name (key in JOB_STATES dict) of a job state, return
        the value (value in JOB_STATES dict). If no match is found, raise
        an exception.
        """
        for state_name, state_value in self.JOB_STATES.items():
            if name == state_name:
                return state_value
        raise Exception('Invalid job state name: %s' % name)

    def wipe_all_job_data(self):
        """
        Deletes the SimpleDB domain that stores job state data. 
        
        .. warning:: This will mean that everything in the incoming bucket will 
        be scheduled for rendering again, so be careful!
        
        Returns:
            True if successful. False if not.
        """
        try:
            self.aws_sdb_connection.delete_domain(settings.SIMPLEDB_DOMAIN_NAME)
            self.aws_sqs_queue.clear()
        except boto.exception.SDBResponseError:
            # Tried to delete a domain that doesn't exist. We probably haven't
            # ran feederd before, or are doing testing.
            pass

        # Reset our local cache of the boto SDB domain object.
        self._aws_sdb_domain = None
        # Reset our local cache of the boto SQS queue object.
        self._aws_sqs_queue = None

    def get_unfinished_jobs(self):
        """
        Queries SimpleDB for a list of pending jobs that have not yet been
        finished. 
        
        :returns: A list of unfinished EncodingJob objects.
        """
        query_str = "SELECT * FROM %s WHERE job_state != '%s' " \
                    "and job_state != '%s' " \
                    "and job_state != '%s'" % (
              settings.SIMPLEDB_DOMAIN_NAME,
              self.JOB_STATES['FINISHED'],
              self.JOB_STATES['ERROR'],
              self.JOB_STATES['ABANDONED']
        )
        results = self.aws_sdb_domain.select(query_str)

        jobs = []
        for item in results:
            try:
                job = self._get_job_object_from_item(item)
            except TypeError:
                print "AWSJobStateBackend.get_unfinished_jobs(): "\
                      "Unable to instantiate job: %s" % item
                continue
            jobs.append(job)

        return jobs

    def _pop_jobs_from_queue(self, queue, num_to_pop, visibility_timeout=30,
                             delete_on_pop=True):
        """
        Pops job objects from a queue whose entries have bodies that just
        contain job ID strings.
        """
        if num_to_pop > 10:
            msg = 'SQS only allows up to 10 messages to be popped at a time.'
            raise Exception(msg)

        messages = self.aws_sqs_queue.get_messages(num_to_pop,
                                      visibility_timeout=visibility_timeout)
        # Store these in a dict to avoid duplicates. Keys are unique id.
        jobs = {}

        for message in messages:
            # These message bodies only contain a unique id string.
            unique_id = message.get_body()

            if not jobs.has_key(unique_id):
                # Avoid querying for a job we already have. This mostly comes
                # up with the state change queue, where you can have more
                # than one state change for the same object. In that case,
                # there could be more than one queue entry with the same
                # job id in their bodies.
                jobs[unique_id] = self.get_job_object_from_id(unique_id)

            if delete_on_pop:
                # Deleting a message makes it gone for good from SQS, instead
                # of re-appearing after the timeout if we don't delete.
                message.delete()

        # Return just the unique AWSEncodingJob objects.
        return jobs.values()

    def pop_jobs_from_queue(self, num_to_pop):
        """
        Pops any recent state changes from the queue.
        """
        return self._pop_jobs_from_queue(self.aws_sqs_queue,
                                         num_to_pop,
                                         visibility_timeout=3600)

    def pop_state_changes_from_queue(self, num_to_pop):
        """
        Pops any recent state changes from the queue.
        """
        return self._pop_jobs_from_queue(self.aws_sqs_state_change_queue,
                                         num_to_pop,
                                         visibility_timeout=3600)

"""
These are used for imports. Probably shouldn't be done like this.
"""
EncodingJob = AWSEncodingJob
JobStateBackend = AWSJobStateBackend()