Search.setIndex({objects:{"media_nommer.feederd.interval_tasks":{threaded_prune_jobs:[8,2,1],threaded_manage_ec2_instances:[8,2,1],task_prune_jobs:[8,2,1],threaded_check_for_job_state_changes:[8,2,1],register_tasks:[8,2,1],task_manage_ec2_instances:[8,2,1],task_check_for_job_state_changes:[8,2,1]},"media_nommer.core":{job_state_backend:[10,0,1],storage_backends:[10,0,1]},"media_nommer.core.job_state_backend.EncodingJob":{is_finished:[10,5,1],save:[10,5,1],set_job_state:[10,5,1]},"media_nommer.ec2nommerd.node_state.NodeStateManager":{get_num_active_threads:[1,3,1],i_did_something:[1,3,1],contemplate_termination:[1,3,1],is_ec2_instance:[1,3,1],send_instance_state_update:[1,3,1],get_instance_id:[1,3,1]},"media_nommer.conf.settings":{FEEDERD_PRUNE_JOBS_INTERVAL:[4,1,1],NOMMERD_HEARTBEAT_INTERVAL:[4,1,1],SIMPLEDB_EC2_NOMMER_STATE_DOMAIN:[4,1,1],SQS_JOB_STATE_CHANGE_QUEUE_NAME:[4,1,1],EC2_INSTANCE_TYPE:[4,1,1],FEEDERD_JOB_STATE_CHANGE_CHECK_INTERVAL:[4,1,1],PRESETS:[4,1,1],EC2_SECURITY_GROUPS:[4,1,1],FEEDERD_AUTO_SCALE_INTERVAL:[4,1,1],SQS_NEW_JOB_QUEUE_NAME:[4,1,1],CONFIG_S3_BUCKET:[4,1,1],NOMMERD_MAX_INACTIVITY:[4,1,1],FEEDERD_ABANDON_INACTIVE_JOBS_THRESH:[4,1,1],STORAGE_BACKENDS:[4,1,1],SIMPLEDB_JOB_STATE_DOMAIN:[4,1,1],EC2_KEY_NAME:[4,1,1],AWS_ACCESS_KEY_ID:[4,1,1],FEEDERD_ALLOW_EC2_LAUNCHES:[4,1,1],MAX_NUM_EC2_INSTANCES:[4,1,1],NOMMERD_TERMINATE_WHEN_IDLE:[4,1,1],NOMMERD_NEW_JOB_CHECK_INTERVAL:[4,1,1],MAX_ENCODING_JOBS_PER_EC2_INSTANCE:[4,1,1],AWS_SECRET_ACCESS_KEY:[4,1,1],JOB_OVERFLOW_THRESH:[4,1,1],EC2_AMI_ID:[4,1,1]},"media_nommer.core.storage_backends.s3":{S3Backend:[10,4,1]},"media_nommer.core.job_state_backend.JobStateBackend":{JOB_STATES:[10,6,1],wipe_all_job_data:[10,3,1],pop_state_changes_from_queue:[10,3,1],get_unfinished_jobs:[10,3,1],FINISHED_STATES:[10,6,1],pop_new_jobs_from_queue:[10,3,1],get_job_object_from_id:[10,3,1]},"media_nommer.ec2nommerd.nommers.base_nommer.BaseNommer":{onomnom:[1,5,1],wrapped_set_job_state:[1,5,1],download_source_file:[1,5,1],upload_to_destination:[1,5,1]},"media_nommer.conf":{utils:[4,0,1],update_settings_from_module:[4,2,1],settings:[4,0,1]},media_nommer:{feederd:[8,0,1],core:[10,0,1],ec2nommerd:[1,0,1],conf:[4,0,1]},"media_nommer.feederd.job_cache":{JobCache:[8,4,1]},"media_nommer.conf.utils":{download_settings:[4,2,1],upload_settings:[4,2,1]},"media_nommer.ec2nommerd.nommers.ffmpeg":{FFmpegNommer:[1,4,1]},"media_nommer.ec2nommerd":{interval_tasks:[1,0,1],node_state:[1,0,1],nommers:[1,0,1]},"media_nommer.ec2nommerd.nommers.base_nommer":{BaseNommer:[1,4,1]},"media_nommer.feederd.ec2_instance_manager.EC2InstanceManager":{get_instances:[8,3,1],spawn_if_needed:[8,3,1],spawn_instances:[8,3,1]},"media_nommer.core.job_state_backend":{JobStateBackend:[10,4,1],EncodingJob:[10,4,1]},"media_nommer.ec2nommerd.node_state":{NodeStateManager:[1,4,1]},"media_nommer.core.storage_backends.s3.S3Backend":{download_file:[10,3,1],upload_file:[10,3,1]},"media_nommer.feederd":{interval_tasks:[8,0,1],job_cache:[8,0,1],ec2_instance_manager:[8,0,1]},"media_nommer.ec2nommerd.interval_tasks":{threaded_heartbeat:[1,2,1],task_heartbeat:[1,2,1],register_tasks:[1,2,1],task_check_for_new_jobs:[1,2,1],threaded_encode_job:[1,2,1]},"media_nommer.feederd.job_cache.JobCache":{load_recent_jobs_at_startup:[8,3,1],uncache_finished_jobs:[8,3,1],get_job:[8,3,1],refresh_jobs_with_state_changes:[8,3,1],is_job_cached:[8,3,1],update_job:[8,3,1],abandon_stale_jobs:[8,3,1],get_cached_jobs:[8,3,1],remove_job:[8,3,1],get_jobs_with_state:[8,3,1]},"media_nommer.ec2nommerd.nommers":{ffmpeg:[1,0,1],base_nommer:[1,0,1]},"media_nommer.core.storage_backends":{s3:[10,0,1],get_backend_for_protocol:[10,2,1],get_backend_for_uri:[10,2,1]},"media_nommer.feederd.ec2_instance_manager":{EC2InstanceManager:[8,4,1]}},terms:{all:[1,3,4,5,6,8,9,10,11],code:[10,0,11,6],queri:[10,11,1,3,8],global:[11,4],month:11,although:4,prefix:[8,1],nommerd_new_job_check_interv:[1,4],higher:[10,2],follow:[0,1,2,3,4,7,9,10,11],task_prune_job:8,decid:[6,1],depend:[0,11,2,3,4],system:[5,0,10],git:11,elsewher:1,specif:[10,1,9,8],send:[1,2,3,4,10,11],easiest:2,init:2,deviat:2,those:[5,11,2,4],under:[0,11,1,4],larg:[5,0,4],must:[2,4],sent:3,suitabl:[5,11],emploi:4,sourc:[0,1,2,4,6,8,9,10,11],string:10,encodingjob:[10,8],far:[11,4],account:2,util:[7,1,4],failur:8,veri:[5,11,8,2],jobcach:8,yyyyyyyyyyyyyyyyyyyi:2,level:[5,0,11,10,6],button:11,list:[10,6,8,2,3],upload:[10,0,8,1,4],"try":[11,1],upload_fil:10,feederd_auto_scale_interv:4,small:4,though:4,refer:[10,0,7,8,3],dir:11,pleas:[11,2],upper:4,uncache_finished_job:8,smaller:5,aptli:11,sign:2,past:5,second:4,cost:2,design:11,pass:[10,1,2,4],download:[10,8,1,2,4],further:[1,3],port:3,ec2_ami_id:[8,4],even:11,index:0,what:[0,2,3,4,5,9,6,11],mpeg:5,sub:[1,9],compar:[8,1],fine:[11,2],section:11,asid:11,uniform:2,access:[10,11,8,2,4],delet:10,juggl:11,simpledb_job_state_domain:[8,4],"new":[10,7,1,11,4],ever:4,method:[10,11,1,9,4],can:[0,1,2,3,4,5,6,8,9,10,11],crunch:1,full:[11,2,3],themselv:[5,6],conf:[0,1,2,4,7,8],gener:[10,11,1],never:5,here:[1,2,3,5,8,10],bodi:3,met:1,firewal:6,let:[8,6,1,2,3],download_fil:10,"847c8ded":4,along:[10,6,1],infil:[1,2],modifi:[10,6],sinc:[0,11,1],valu:[1,2,3,4,8,10],wait:4,search:[5,0],num_to_pop:10,anymor:1,current:[1,2,4,5,6,8,9,10,11],abandon_stale_job:8,queue:[1,4,5,6,8,9,10],datetim:10,amount:[5,1,8],notify_url:[10,3],pick:5,action:1,extrem:5,implement:[5,3],visit:[11,2],chanc:2,ourselv:1,via:[1,2,3,4,6,8,10,11],elect:4,ec2nommerd:[0,1,2,4,5,6,7,8,9,10,11],extra:1,activ:[8,1,4],modul:[0,1,4,6,7,8,10,11],feederd_allow_ec2_launch:4,layer:1,filenam:4,unix:2,api:[0,1,2,3,5,6,7,8,10],instal:[0,11,2],txt:[11,2],select:[7,2,3],highli:[11,2],fee:[5,2],from:[0,1,2,3,4,6,8,9,10,11],would:[6,0,11,1],commun:[1,2,3,5,6,10],sake:2,regist:[8,1],two:[5,10,9,6],coverag:11,task_:[8,1],threaded_check_for_job_state_chang:8,few:[6,11,2],live:1,busi:1,call:[0,1,2,3,4,8,10],recommend:[11,2],sqs_new_job_queue_nam:4,upstream:11,basi:[1,4],type:[10,8,1,4],tell:[6,11],more:[0,1,2,3,5,6,8,10,11],reachabl:2,desir:1,feederd_abandon_inactive_jobs_thresh:[8,4],afford:5,relat:[8,4],warn:[10,11],flag:[11,1],exce:4,stick:4,actual:[8,6,11,1,2],hole:6,hold:2,cach:8,nomconf_modul:4,shoot:11,job_state_detail:10,none:[10,8,1,4],retriev:[10,6],aws_secret_access_kei:[2,4],scalabl:[5,0],setup:[2,4],work:[1,2,4,5,6,9,10,11],uniqu:[10,1,8],itself:[7,1,11,9,4],obvious:11,whatev:[10,2,4],learn:0,abandon:[8,4],meet:[5,0],metal:6,root:11,overrid:[1,2,4],want:[1,2,7,8,6,11],process:[0,1,5,6,8,10],share:6,accept:[10,11],topic:[0,11],tarbal:2,minimum:2,tab:11,job_overflow_thresh:4,serial:10,keep:[5,6,11,2],occur:1,alwai:[2,4],load_recent_jobs_at_startup:8,cours:0,end:[5,1,3],secur:[2,4],register_task:[8,1],anoth:[10,1,4],comfort:2,ping:1,idl:4,send_instance_state_upd:1,write:[5,0,11,3],how:[11,1,2,9,4],instead:[5,8],flow:1,config:4,get_job_object_from_id:10,updat:[8,1,4],product:2,resourc:2,overridden:1,max:[11,1],clone:[6,11],after:[1,4,5,8,9,6,11],"long":[8,1,4],befor:[5,11,1,4],wrong:8,discard:4,date:[11,2,4],develop:[0,11,2,4],underscor:11,autom:6,data:[10,6,1],github:[0,11,2],orchestr:[5,1],practic:2,classmethod:[10,1,8],light:11,minim:4,credenti:[2,4],correspond:3,ffmpegnomm:[1,2,3,9,4],issu:[0,11,2,3],inform:[10,6,4],"switch":11,maintain:[6,1,2],environ:[11,2],allow:[11,4],media:[0,1,2,3,4,5,6,7,8,9,10,11],skip:11,unique_id:10,ssh:[2,4],duointeract:[0,11],oper:[10,6],help:[0,11,8,2],over:[11,2,4],move:6,get_unfinished_job:10,top:10,brain:6,through:[1,2,3,5,6,10,11],get_jobs_with_st:8,flexibl:[5,0],vari:[2,4],last_modified_dtim:10,paramet:[10,8,1,4],logic:[8,1,9],threadpool:1,conjunct:1,group:[2,4],monitor:[6,1],fit:[5,0],your_preset_name_her:1,other_bucket:3,settings_modul:4,whether:[10,6,1],window:2,pend:[10,4],infrastructur:5,foundat:[1,9],cool:11,might:[10,0],easier:11,nom:1,them:[5,10,8,2,4],good:[5,0,11,10,2],"return":[10,11,1,8],greater:4,thei:[2,4,5,6,8,9,10],python:[5,0,11,2,3],timestamp:1,spell:5,dai:8,nommer:[0,1,2,3,4,5,6,7,8,9,10,11],thread_count_mod:1,promis:11,now:[11,1,2],introduct:[5,0],choic:6,document:[0,2,3,4,10,11],somewher:3,name:[11,2,4],anyth:[1,4,8,9,10,11],simpl:[5,10,3],nomconf:[11,2,3,9,4],instruct:[11,2],refresh:[8,3],get_backend_for_protocol:10,micro:4,achiev:2,compris:5,each:[1,2,4,6,9,10],found:[5,10,8,6],went:8,media_nommer_jst:4,overse:8,domain:[10,8,1,4],intellig:[5,0,8,6],individu:10,hard:8,continu:[6,1],realli:8,consum:1,contributor:11,meta:1,usernam:11,ec2:[0,1,2,4,5,8,9,6,11],year:11,our:[1,2,4,5,6,11],happen:8,todo:[10,8],refresh_jobs_with_state_chang:8,out:2,variabl:[11,4],ftp:10,announc:8,vcd:3,space:11,goe:[6,4],newli:10,mere:[1,4],content:[10,3,4],adapt:0,merg:11,ref:2,correct:10,stare:3,earlier:6,barrier:11,workflow:[1,9,4],manipul:10,differ:[5,10,9,6],free:3,standard:11,creation_dtim:10,reason:11,base:[0,1,2,3,4,5,8,6],dictionari:8,threaded_:[8,1],ask:11,nommerd_heartbeat_interv:[1,4],aws_access_key_id:[2,4],care:10,max_num_ec2_inst:4,indent:11,thread:1,launch:4,argument:4,could:8,omit:[11,3],put:5,mac:2,struggl:5,filter:8,thing:[1,3,4,5,8,6,11],perhap:6,perman:[5,8],outsid:5,enough:11,heartbeat:[1,4],think:[11,9],first:1,feed:9,softwar:[5,0,11,4],notifi:[1,4],directli:[6,2],download_source_fil:1,onc:[10,11,2],clariti:2,number:[0,1,4,5,6,8,10],yourself:10,restrict:6,mai:[0,1,2,3,4,5,6,9,10,11],unlik:11,alreadi:[11,8,4],done:[6,1,2,9],least:[2,9,4],expir:[8,4],open:6,primari:5,stage:2,size:8,prioriti:2,given:[1,2,4,6,8,10],num_inst:8,capac:[9,4],script:2,interact:[5,10],perfectli:2,sometim:8,messag:[10,3],stack:10,fobj:[10,1],too:[1,4],badinput:3,termin:[1,4,5,9,6,11],basic_ffmpeg:2,conveni:11,store:[10,1,2,4],minimal_preset:1,adher:11,consol:2,option:[1,2,3,4,6,10],relationship:[6,0,9],"public":6,copi:[11,4],specifi:[1,2,3,4,6,8,10],direct:[5,2],employ:11,nommer_config:4,part:[6,2],enclos:2,mostli:11,preset_with_default:4,off:[6,1,2,9],than:[6,11,8,3,4],serv:[10,0,1,4],kind:[2,3,9],prune:8,keyword:10,provid:[10,6,2,9,4],spawn_inst:8,exampl:[0,1,2,3,4,6,9,10,11],project:[5,0,11,2,6],matter:[5,11],posix:2,balanc:5,str:[10,8,1,4],ffmpeg:[1,2,3,4,5,7,9],video:0,minut:10,other:[5,3,4],ec2_security_group:4,simpledb:[1,2,4,6,8,9,10],explicitli:4,ran:[5,10,2],source_path:[10,3],respons:[1,3],mind:5,spectrum:5,packag:2,width:11,complet:[5,1,2,3],have:[1,2,4,5,6,8,10,11],tabl:0,need:[0,1,2,3,4,5,6,8,10,11],seen:10,notimplementederror:1,"null":3,thought:[10,6,1],realm:5,interval_task:[8,7,1],destroi:2,self:[11,1],note:[0,1,2,3,4,6,10,11],also:[0,1,2,3,4,5,6,8,9,10],high:[5,0,11],client:[0,7,2,3],take:[2,4],which:[1,2,3,4,5,6,8,9,10,11],download_set:4,combin:0,noth:10,singl:[10,4],nommerd_terminate_when_idl:4,compat:2,sure:[11,1,2,4],unless:[11,1,2],distribut:[5,0,2,6],deploy:[11,2],track:[5,10,1,2,6],spawn_if_need:8,price:5,object:[10,8],deleg:6,paid:[5,0],nodestatemanag:1,most:[11,4],plai:5,poke:11,letter:11,deploi:2,bsd:[0,11,2],"class":[1,4,8,9,10,11],tradit:11,don:[5,6,1],url:[10,3],doc:0,clear:8,later:[11,2],cover:5,uri:[10,3,4],doe:[5,6],meanwhil:11,pidfil:11,determin:[1,2,4],ec2_key_nam:[2,4],someth:[1,2,3,4,8,11],fact:11,reactor:[8,1],show:3,cheap:[5,0],task_check_for_new_job:1,particularli:11,hack:[0,11,2],threshold:8,unfinish:[10,8,4],find:[10,11,8,9,4],addit:[0,1,3,4,5,8,6,11],involv:[10,1],absolut:11,onli:[0,1,2,4,5,7,8,11],threaded_manage_ec2_inst:8,locat:[10,4],just:[1,2,5,8,10,11],get_job:8,configur:[0,1,2,3,4,5,8,9,6,11],solut:5,state:[1,2,3,4,6,8,10],should:[1,3,4,5,6,8,9,10],ec2_instance_typ:4,ec2_instance_manag:[7,8],dict:[10,8,1,2,4],all_upper_cas:11,local:[0,11,4],haven:8,finished_st:[10,8],meant:11,hit:[10,1,3,9],contribut:[0,11],variou:[3,4],get:[0,2,3,5,6,7,8,10,11],familiar:11,pypi:2,cheaper:[5,0],isn:6,amazon:[5,0,2,9,6],made:[11,8],storage_backend:[10,7,4],report:1,ambiti:11,requir:[0,1,2,4,5,6,11],target:3,child:1,base_nomm:[7,1],simpledb_ec2_nommer_state_domain:4,patch:11,reload:8,bad:3,stuff:2,common:10,obviou:11,contain:[1,2,4,8,9,10],get_num_active_thread:1,i_did_someth:1,is_finish:10,where:[0,3,4,5,10,11],remov:8,view:9,set:[1,2,3,4,7,8,9,10,11],stump:[0,11],assumpt:[0,2],see:[0,1,2,3,4,8,9,10,11],bare:6,result:[5,1,2],arg:1,reserv:8,hash:10,best:[10,6,11],subject:5,statu:[5,0,10,1,4],said:[10,11,8,2,4],review:11,topmost:10,aws_secret_kei:3,behind:8,won:[10,11,4],between:[1,4],"import":[1,3,4,8,10,11],attribut:4,altern:0,accord:5,kei:[1,2,3,4,8,9,10],were:5,style:[0,11],job:[1,2,3,4,5,6,8,9,10],entir:[0,11,3],dest_path:[10,3],come:5,get_instance_id:1,error_cod:3,ec2instancemanag:8,both:[10,6],jobstatebackend:[10,8],last:[10,6,1],expos:[5,6],boto:[10,0,8],plugin:[8,6,1,9,4],set_job_st:[10,1],howev:5,lazi:1,against:1,is_ec2_inst:1,etc:[8,4],capabl:10,instanc:[0,1,2,4,5,6,8,9,10,11],trivial:11,outfile_opt:[1,2,3,4],bool:[10,1,8],mani:[5,10,1,4],com:[0,11,3],load:[5,10,1,6,8],simpli:[6,7,8,4],point:[6,8],instanti:10,schedul:[5,6,1,3],unittest:11,outfil:[1,2,4],period:[5,6,9],pop:[10,6],non:[8,1],littl:[5,11],linux:2,typic:4,throughout:11,backend:[10,4],ultim:2,duo:5,due:2,been:[10,1,8],mark:[5,8],compon:6,json:[5,0,2,3,6],much:[5,8,2],interest:[8,0,7,1,4],modif:11,feederd:[0,1,2,3,4,5,6,7,8,9,10,11],popul:10,"abstract":[10,1],remove_job:8,fals:[10,1,3,8],rather:8,fire:1,worker:[5,1,9],ani:[1,2,4,5,6,8,9,10,11],ridden:4,demand:0,quick:11,spin:5,submiss:2,present:[5,8],bore:11,"case":[0,1,3,4,10,11],look:[1,2,3,4,5,8,9,6,11],upload_to_destin:1,servic:[5,0,1,2],tip:[10,11,1,4],commerci:[5,0],aim:5,defin:[8,4],"while":[11,2],abov:1,error:[10,8,3],fun:11,s3backend:10,everyon:11,capword:11,spawn:[6,8,4],ami:[6,8,2,4],mandatori:3,customiz:5,virtualenvwrapp:2,advantag:5,applic:[6,1,3],xxxxxxxxx:2,site:0,destin:1,basenomm:[1,9],pip:[11,2],kwarg:1,motiv:6,myapp:3,lightweight:6,crash:8,tediou:11,twistd:[11,3],pat:1,config_s3_bucket:4,storagebackend:10,receiv:9,suggest:11,make:[1,2,3,4,10,11],shorten:2,same:[5,11,1,4],check:[1,2,3,4,5,8],handl:[10,6,1,8],complex:[6,11],media_nomm:[0,1,2,4,6,7,8,9,10,11],pop_state_changes_from_queu:10,pai:[5,0],eventu:[8,2],start:[0,1,2,3,4,7,8,6,11],conflict:[2,3],difficult:2,week:11,finish:[10,11,8,4],http:[10,0,11,3],update_job:8,assist:1,hang:8,evil:11,hand:9,director:5,codebas:11,rais:[5,10,1],temporari:1,user:[0,1,4],improv:0,extern:1,media_nommer_ec2nommer_st:4,chang:[10,11,8,4],recent:[10,8],lower:[10,6],task:[10,6,1,8],contemplate_termin:1,center:6,whole:11,well:[2,3],game:5,without:11,"320x240":[1,4],pep8:11,contact:5,command:[1,3,9,4],thi:[0,1,2,3,4,5,6,7,8,10,11],get_cached_job:8,nomconf_uri:4,programm:11,everyth:[5,10,11,1],usual:1,comment:11,wrapped_set_job_st:1,protocol:[10,1,4],entri:[6,11,8],execut:[8,1],when:[1,3,4,8,10,11],obtain:[0,11],rest:[2,3],indic:0,movie_high_q:3,kill:4,pop_new_jobs_from_queu:10,monei:[5,6,9],flavor:2,manner:[10,0,1,8],yet:[10,2],web:[2,3,5,8,6,11],easi:[5,11],is_loc:1,had:[5,2],except:[10,1],job_id:3,add:[1,2,3],valid:[8,4],overview:[5,0],conceiv:8,save:[5,10,9,6],match:8,build:11,earli:[0,2],occas:8,royalti:5,around:5,format:[5,10,1,3],read:5,prefer:2,piec:10,camelcas:11,encumb:5,know:[8,6,1,2,3],background:[5,0],elabor:3,bit:[8,1],licens:[5,0,11],horsepow:0,saniti:2,knock:5,daemon:[1,2,3,4,5,8,9,6,11],is_job_cach:8,resid:[8,4],like:[0,1,2,3,4,5,9,10,11],success:[5,10,3],node_st:[7,1],server:[8,6,11,1,2],collect:0,necessari:[11,1],nose:11,manpow:8,output:[10,1,3],uppercas:4,manag:[1,2,4,5,6,8,9,10],unabl:3,encount:3,exceed:4,"1f40fc92da241694750979ee6cf582f2d5d7d28e1833":3,often:[5,4],simplifi:2,interv:[8,1,4],creation:[5,8],some:[0,1,2,4,5,8,9],back:1,dead:8,infilenam:1,understood:11,intern:11,home:[10,4],inact:[5,6,1,4],librari:[0,7,2,3],threaded_encode_job:1,virtualenv:[11,2],guid:11,easili:6,"function":[10,1,8],avoid:[11,1],max_encoding_jobs_per_ec2_inst:[1,4],legal:5,task_heartbeat:1,tracker:[0,11,2,3],leav:[0,11],unit:[5,0,11],condit:1,either:3,threaded_heartbeat:1,core:[10,0,7,8,6],who:5,run:[0,1,2,3,4,5,6,8,9,10,11],power:0,blankli:3,brawn:6,usag:0,els:[10,11,4],wipe_all_job_data:10,host:[6,3],task_manage_ec2_inst:8,repositori:[0,11],upload_set:4,post:3,panel:2,comparison:6,about:[0,11],rare:8,zip:2,column:11,materi:7,ordeal:11,feederd_prune_jobs_interv:4,page:[5,0,7,11],degre:5,preset:[0,1,2,3,4,9],includ:[11,9,4],neighbor:11,act:1,incur:2,feederd_job_state_change_check_interv:4,produc:1,block:[8,1],componenet:5,own:[5,6,3,9],job_don:3,pythonpath:11,sameq:[1,3,4],within:[11,8,2,4],encod:[0,1,2,3,4,5,6,7,8,9,10],easy_instal:2,automat:[0,9],appropri:[10,9],down:[10,6],pair:2,right:[11,1],empti:[5,10],wrap:[1,3,9],zzzzzzzzzzzzzzzzzzzzzzzzzzzzz:2,storag:[10,4],your:[0,1,2,3,4,5,9,6,11],per:[10,8,2,4],job_opt:[10,3,9],fast:0,wai:[6,0,11,2],aren:11,support:[2,4],question:11,submit:[11,3],custom:[5,6,3],avail:[8,2,9],stuck:8,compliant:2,low:11,lot:[6,11],perform:[8,1],machin:[6,11,2,4],fork:11,form:3,offer:5,job_stat:[10,8],basic:[5,1,2,8],nommerd_max_inact:4,idea:11,cloud:[6,9],link:0,line:4,"true":[1,2,3,4,8,10],bug:11,pull:[6,11,9],new_stat:1,input:3,consist:[1,3],possibl:[10,11,1],"default":[1,2,3,4],wish:6,commit:11,bucket:[2,3,4],maximum:4,until:[5,6],onomnom:1,below:1,limit:[10,0],indefinit:8,lowercas:11,otherwis:[8,1],deadlock:11,job_cach:[7,8],expect:11,gone:10,featur:[6,11],supervisor:[11,2],creat:[1,2,3,4,6,8,9,10,11],get_inst:8,"int":[10,1,8],certain:[1,3],dure:[6,1],pid:11,doesn:[11,8],repres:[10,8],twist:[0,1,4,8,9,6],exist:[10,11,1,3,8],file:[10,1,2,3,4],request:[11,1,2,3],threaded_prune_job:8,keynam:3,probabl:[7,8,11],mp4:3,aws_id:3,excel:[0,11,1,3],detail:[1,2,3,4,8,9,10],virtual:11,taker:2,field:1,codec:5,role:3,test:[0,11],task_check_for_job_state_chang:8,you:[0,1,2,3,4,5,6,7,9,10,11],architectur:[6,0],node:[5,6,1,4],get_backend_for_uri:10,notif:10,wildcard:11,outfilenam:1,docstr:11,scale:[6,0],consid:[10,8,4],pool:8,bulk:0,infile_opt:[1,2,3],faster:11,sqs_job_state_change_queue_nam:[8,4],directori:[11,2,4],reliabl:0,update_settings_from_modul:4,job_state_backend:[10,7,8],wildli:2,gracefulli:8,time:[1,2,4,5,6,8,9,10],push:4},objtypes:{"0":"py:module","1":"py:data","2":"py:function","3":"py:classmethod","4":"py:class","5":"py:method","6":"py:attribute"},titles:["media-nommer: A Python-based media encoder system","media_nommer.ec2nommerd","Installation","Using feederd&#8217;s JSON API","media_nommer.conf","An Introduction to media-nommer","feederd","media-nommer module reference","media_nommer.feederd","ec2nommerd","media_nommer.core","Hacking on media-nommer"],objnames:{"0":"Python module","1":"Python data","2":"Python function","3":"Python class method","4":"Python class","5":"Python method","6":"Python attribute"},filenames:["index","apiref/ec2nommerd","installation","jsonapi","apiref/conf","introduction","feederd","apiref/index","apiref/feederd","ec2nommerd","apiref/core","hacking"]})