Search.setIndex({objects:{"media_nommer.feederd.interval_tasks":{threaded_prune_jobs:[8,2,1],threaded_manage_ec2_instances:[8,2,1],task_prune_jobs:[8,2,1],threaded_check_for_job_state_changes:[8,2,1],register_tasks:[8,2,1],task_manage_ec2_instances:[8,2,1],task_check_for_job_state_changes:[8,2,1]},"media_nommer.core":{job_state_backend:[6,0,1],storage_backends:[6,0,1]},"media_nommer.core.job_state_backend.EncodingJob":{is_finished:[6,5,1],save:[6,5,1],set_job_state:[6,5,1]},"media_nommer.ec2nommerd.node_state.NodeStateManager":{get_num_active_threads:[1,3,1],i_did_something:[1,3,1],contemplate_termination:[1,3,1],is_ec2_instance:[1,3,1],send_instance_state_update:[1,3,1],get_instance_id:[1,3,1]},"media_nommer.conf.settings":{FEEDERD_PRUNE_JOBS_INTERVAL:[4,1,1],NOMMERD_HEARTBEAT_INTERVAL:[4,1,1],SIMPLEDB_EC2_NOMMER_STATE_DOMAIN:[4,1,1],SQS_JOB_STATE_CHANGE_QUEUE_NAME:[4,1,1],EC2_INSTANCE_TYPE:[4,1,1],FEEDERD_JOB_STATE_CHANGE_CHECK_INTERVAL:[4,1,1],PRESETS:[4,1,1],EC2_SECURITY_GROUPS:[4,1,1],FEEDERD_AUTO_SCALE_INTERVAL:[4,1,1],SQS_NEW_JOB_QUEUE_NAME:[4,1,1],CONFIG_S3_BUCKET:[4,1,1],NOMMERD_MAX_INACTIVITY:[4,1,1],FEEDERD_ABANDON_INACTIVE_JOBS_THRESH:[4,1,1],STORAGE_BACKENDS:[4,1,1],SIMPLEDB_JOB_STATE_DOMAIN:[4,1,1],EC2_KEY_NAME:[4,1,1],AWS_ACCESS_KEY_ID:[4,1,1],FEEDERD_ALLOW_EC2_LAUNCHES:[4,1,1],MAX_NUM_EC2_INSTANCES:[4,1,1],NOMMERD_TERMINATE_WHEN_IDLE:[4,1,1],NOMMERD_NEW_JOB_CHECK_INTERVAL:[4,1,1],MAX_ENCODING_JOBS_PER_EC2_INSTANCE:[4,1,1],AWS_SECRET_ACCESS_KEY:[4,1,1],JOB_OVERFLOW_THRESH:[4,1,1],EC2_AMI_ID:[4,1,1]},"media_nommer.core.storage_backends.s3":{S3Backend:[6,4,1]},"media_nommer.core.job_state_backend.JobStateBackend":{JOB_STATES:[6,6,1],wipe_all_job_data:[6,3,1],pop_state_changes_from_queue:[6,3,1],get_unfinished_jobs:[6,3,1],FINISHED_STATES:[6,6,1],pop_new_jobs_from_queue:[6,3,1],get_job_object_from_id:[6,3,1]},"media_nommer.ec2nommerd.nommers.base_nommer.BaseNommer":{onomnom:[1,5,1],wrapped_set_job_state:[1,5,1],upload_to_destination:[1,5,1],download_source_file:[1,5,1]},"media_nommer.conf":{utils:[4,0,1],update_settings_from_module:[4,2,1],settings:[4,0,1]},media_nommer:{feederd:[8,0,1],core:[6,0,1],ec2nommerd:[1,0,1],conf:[4,0,1]},"media_nommer.feederd.job_cache":{JobCache:[8,4,1]},"media_nommer.conf.utils":{download_settings:[4,2,1],upload_settings:[4,2,1]},"media_nommer.ec2nommerd.nommers.ffmpeg":{FFmpegNommer:[1,4,1]},"media_nommer.ec2nommerd":{interval_tasks:[1,0,1],node_state:[1,0,1],nommers:[1,0,1]},"media_nommer.ec2nommerd.nommers.base_nommer":{BaseNommer:[1,4,1]},"media_nommer.feederd.ec2_instance_manager.EC2InstanceManager":{get_instances:[8,3,1],spawn_if_needed:[8,3,1],spawn_instances:[8,3,1]},"media_nommer.core.job_state_backend":{JobStateBackend:[6,4,1],EncodingJob:[6,4,1]},"media_nommer.ec2nommerd.node_state":{NodeStateManager:[1,4,1]},"media_nommer.core.storage_backends.s3.S3Backend":{download_file:[6,3,1],upload_file:[6,3,1]},"media_nommer.feederd":{interval_tasks:[8,0,1],job_cache:[8,0,1],ec2_instance_manager:[8,0,1]},"media_nommer.ec2nommerd.interval_tasks":{threaded_heartbeat:[1,2,1],task_heartbeat:[1,2,1],register_tasks:[1,2,1],task_check_for_new_jobs:[1,2,1],threaded_encode_job:[1,2,1]},"media_nommer.feederd.job_cache.JobCache":{load_recent_jobs_at_startup:[8,3,1],uncache_finished_jobs:[8,3,1],get_job:[8,3,1],refresh_jobs_with_state_changes:[8,3,1],is_job_cached:[8,3,1],update_job:[8,3,1],abandon_stale_jobs:[8,3,1],get_cached_jobs:[8,3,1],remove_job:[8,3,1],get_jobs_with_state:[8,3,1]},"media_nommer.ec2nommerd.nommers":{ffmpeg:[1,0,1],base_nommer:[1,0,1]},"media_nommer.core.storage_backends":{s3:[6,0,1],get_backend_for_protocol:[6,2,1],get_backend_for_uri:[6,2,1]},"media_nommer.feederd.ec2_instance_manager":{EC2InstanceManager:[8,4,1]}},terms:{all:[1,3,4,5,6,8,9,10,11],code:[10,0,11,6],myapp:3,queri:[8,6,11,1,3],global:[11,4],month:11,prefix:[8,1],legal:5,follow:[0,1,2,3,4,7,9,6,11],task_prune_job:8,request:[11,1,2,3],decid:[10,1],depend:[0,11,2,3,4],elsewher:1,send:[1,2,3,4,6,11],easiest:2,init:2,deviat:2,certain:[1,3],present:[5,8],under:[0,11,1,4],leav:[0,11],must:[2,4],sent:3,suitabl:[5,11],"case":[0,1,3,4,6,11],sourc:[0,1,2,4,6,8,9,10,11],string:[6,3],encodingjob:[6,8],far:[11,4],role:3,account:2,util:[7,1,4],difficult:2,failur:8,veri:[5,11,8,2],jobcach:8,yyyyyyyyyyyyyyyyyyyi:2,level:[5,0,11,6,10],button:11,list:[10,6,8,2,3],upload:[8,0,6,1,4],"try":[11,1],upload_fil:6,feederd_auto_scale_interv:4,small:4,straight:3,dir:11,pleas:[11,2],upper:4,uncache_finished_job:8,smaller:5,task_heartbeat:1,aptli:11,sign:2,past:5,second:4,cost:2,design:11,pass:[6,1,2,4],download:[8,6,1,2,4],further:[1,3],submit:[11,3],port:3,ec2_ami_id:[8,4],even:11,index:0,what:[0,2,3,4,5,9,10,11],mpeg:5,sub:[1,9],compar:[8,1],unfinish:[6,8,4],section:11,asid:11,uniform:2,current:[1,2,4,5,6,8,9,10,11],delet:6,juggl:11,simpledb_job_state_domain:[8,4],"new":[6,7,1,11,4],ever:4,method:[6,11,1,9,4],can:[0,1,2,3,4,5,6,8,9,10,11],crunch:1,full:[11,2,3],themselv:[5,10],gener:[6,11,1],never:5,here:[1,2,3,5,8,6],met:1,explicitli:4,let:[10,1,2,3,8],codec:5,download_fil:6,"847c8ded":4,along:[10,6,1],standard:11,modifi:[10,6],sinc:[0,11,1],valu:[1,2,3,4,8,6],wait:4,search:[5,0],num_to_pop:6,anymor:1,abandon_stale_job:8,queue:[1,4,5,6,8,9,10],datetim:6,amount:[5,1,8],pick:5,action:1,extrem:5,implement:[5,3],chanc:2,ourselv:1,via:[1,2,3,4,6,8,10,11],elect:4,dictionari:8,extra:1,solut:5,modul:[0,1,4,6,7,8,10,11],feederd_allow_ec2_launch:4,filenam:4,unix:2,api:[0,1,2,3,5,6,7,8,10],instal:[0,11,2],txt:[11,2],select:[7,2,3],highli:[11,2],fee:[5,2],from:[0,1,2,3,4,6,8,9,10,11],would:[10,0,11,1],commun:[1,2,3,5,6,10],sake:2,regist:[8,1],two:[5,10,6,9],coverag:11,task_:[8,1],threaded_check_for_job_state_chang:8,few:[10,11,2],live:1,ec2_instance_manag:[7,8],call:[0,1,2,3,4,8,6],recommend:[11,2],sqs_new_job_queue_nam:4,upstream:11,care:6,type:[8,6,1,4],tell:[10,11],more:[0,1,2,3,5,6,8,10,11],reachabl:2,desir:1,feederd_abandon_inactive_jobs_thresh:[8,4],afford:5,relat:[8,4],site:0,warn:[6,11],flag:[11,1],exce:4,stick:4,rare:8,hole:10,hold:2,cach:8,nomconf_modul:4,shoot:11,job_state_detail:6,none:[8,6,1,4],retriev:[10,6],sometim:8,aws_secret_access_kei:[2,4],scalabl:[5,0],setup:[2,4],work:[1,2,4,5,6,9,10,11],uniqu:[8,6,1],kwarg:1,obvious:11,whatev:[6,2,4],learn:0,abandon:[8,4],meet:[5,0],root:11,overrid:[1,2,4],want:[1,2,7,8,10,11],process:[0,1,5,10,8,6],share:10,accept:[6,11],topic:[0,11],tarbal:2,minimum:2,tab:11,job_overflow_thresh:4,serial:[6,3],struggl:5,yet:[6,2],occur:1,alwai:[2,4],load_recent_jobs_at_startup:8,cours:0,end:[5,1,3],secur:[2,4],overse:8,anoth:[6,1,4],comfort:2,ping:1,degre:5,send_instance_state_upd:1,threadpool:1,your_preset_name_her:1,low:11,instead:[5,8],flow:1,simpl:[5,6,3],get_job_object_from_id:6,updat:[8,1,4],product:2,resourc:2,overridden:1,max:[11,1],clone:[10,11],after:[1,4,5,8,9,10,11],befor:[5,11,1,4],wrong:8,codebas:11,date:[11,2,4],pat:1,underscor:11,cheaper:[5,0],data:[10,6,1],github:[0,11,2],orchestr:[5,1],practic:2,classmethod:[8,6,1],light:11,storagebackend:6,credenti:[2,4],correspond:3,ffmpegnomm:[1,2,3,9,4],issu:[0,11,2,3],register_task:[8,1],"switch":11,maintain:[10,1,2],environ:[11,2],allow:[11,4],suggest:11,excel:[0,11,1,3],unique_id:6,storage_backend:[6,7,4],feed:9,creation:[5,8],help:[0,11,8,2],job_state_backend:[6,7,8],over:[11,2,4],move:10,get_unfinished_job:6,brain:10,through:[1,2,3,5,6,10,11],job_don:3,flexibl:[5,0],vari:[2,4],last_modified_dtim:6,paramet:[8,6,1,4],write:[5,0,11,3],conjunct:1,group:[2,4],monitor:[10,1],fit:[5,0],how:[11,1,2,9,4],other_bucket:3,settings_modul:4,window:2,pend:[6,4],infrastructur:5,pythonpath:11,cool:11,might:[6,0],easier:11,nom:1,them:[5,6,8,2,4],good:[5,0,11,6,2],"return":[8,6,11,1],greater:4,thei:[2,4,5,6,8,9,10],python:[5,0,11,2,3],timestamp:1,spell:5,dai:8,nommer:[0,1,2,3,4,5,6,7,8,9,10,11],easy_instal:2,repositori:[0,11],promis:11,now:[11,1,2],introduct:[5,0],choic:10,eventu:[8,2],somewher:3,name:[11,2,4],anyth:[1,4,8,9,6,11],config:4,nomconf:[11,2,3,9,4],unlik:11,refresh:[8,3],get_backend_for_protocol:6,micro:4,achiev:2,compris:5,each:[1,2,4,6,9,10],found:[5,10,6,8],went:8,media_nommer_jst:4,domain:[8,6,1,4],intellig:[5,0,8,10],individu:6,hard:8,continu:[10,1],realli:8,consum:1,contributor:11,meta:1,ec2:[0,1,2,4,5,8,9,10,11],year:11,our:[1,2,4,5,10,11],happen:8,patch:11,todo:[6,8],refresh_jobs_with_state_chang:8,out:2,variabl:[11,4],ftp:6,vcd:3,space:11,goe:[10,4],newli:6,your:[0,1,2,3,4,5,9,10,11],content:[6,3,4],adapt:0,ref:2,correct:6,job_opt:[6,3,9],earlier:10,barrier:11,workflow:[1,9,4],manipul:6,given:[1,2,4,6,8,10],free:3,infil:[1,2],creation_dtim:6,reason:11,base:[0,1,2,3,4,5,8,10],ec2nommerd:[0,1,2,4,5,6,7,8,9,10,11],threaded_:[8,1],ask:11,nommerd_heartbeat_interv:[1,4],basi:[1,4],max_num_ec2_inst:4,indent:11,thread:1,launch:4,could:8,omit:[11,3],put:5,mac:2,keep:[5,10,11,2],filter:8,thing:[1,3,4,5,8,10,11],perhap:10,perman:[5,8],outsid:5,enough:11,heartbeat:[1,4],prefer:2,think:[11,9],first:1,oper:[10,6],softwar:[5,0,11,4],notifi:[1,4],directli:[10,2],download_source_fil:1,onc:[6,11,2],clariti:2,number:[0,1,4,5,6,8,10],yourself:6,restrict:10,mai:[0,1,2,3,4,5,6,9,10,11],instruct:[11,2],alreadi:[11,8,4],done:[10,1,2,9],messag:[6,3],zzzzzzzzzzzzzzzzzzzzzzzzzzzzz:2,expir:[8,4],open:10,primari:5,size:8,prioriti:2,differ:[5,10,6,9],num_inst:8,capac:[9,4],script:2,top:6,perfectli:2,system:[5,0,6],least:[2,9,4],fobj:[6,1],too:[1,4],termin:[1,4,5,9,10,11],basic_ffmpeg:2,conveni:11,store:[6,1,2,4],minimal_preset:1,adher:11,consol:2,option:[1,2,3,4,6,10],relationship:[10,0,9],copi:[11,4],specifi:[1,2,3,4,6,8,10],direct:[5,2],nommer_config:4,part:[10,2],enclos:2,mostli:11,preset_with_default:4,contemplate_termin:1,than:[10,11,8,3,4],serv:[6,0,1,4],kind:[2,3,9],ffmpeg:[1,2,3,4,5,7,9],keyword:6,provid:[10,6,2,9,4],spawn_inst:8,project:[5,0,11,2,10],matter:[5,11],posix:2,balanc:5,str:[8,6,1,4],were:5,video:0,minut:6,ec2_security_group:4,simpledb:[1,2,4,6,8,9,10],fork:11,ran:[5,6,2],well:[2,3],arg:1,mind:5,spectrum:5,packag:2,complet:[5,1,2,3],have:[1,2,3,4,5,6,8,10,11],tabl:0,need:[0,1,2,3,4,5,6,8,10,11],seen:6,notimplementederror:1,"null":3,"320x240":[1,4],realm:5,inform:[10,6,4],interval_task:[8,7,1],destroi:2,self:[11,1],contact:5,note:[0,1,2,3,4,6,10,11],also:[0,1,2,3,4,5,6,8,9,10],high:[5,0,11],client:[0,7,2,3],take:[2,4],which:[1,2,3,4,5,6,8,9,10,11],download_set:4,combin:0,noth:6,singl:[6,4],nommerd_terminate_when_idl:4,compat:2,sure:[11,1,2,4],unless:[11,1,2],distribut:[5,0,2,10],deploy:[11,2],usernam:11,spawn_if_need:8,price:5,object:[6,8],deleg:10,paid:[5,0],nodestatemanag:1,most:[11,4],plai:5,poke:11,letter:11,deploi:2,bsd:[0,11,2],alpha:0,"class":[1,4,8,9,6,11],max_encoding_jobs_per_ec2_inst:[1,4],tradit:11,demand:0,don:[5,10,1],url:[6,3],doc:0,clear:8,later:[11,2],metal:10,uri:[6,3,4],doe:[5,10],meanwhil:11,pidfil:11,determin:[1,2,4],ec2_key_nam:[2,4],review:11,fact:11,reactor:[8,1],show:3,cheap:[5,0],task_check_for_new_job:1,particularli:11,hack:[0,11,2],threshold:8,fine:[11,2],find:[6,11,8,9,4],addit:[0,1,3,4,5,8,10,11],involv:[6,1],absolut:11,onli:[0,1,2,4,5,7,8,11],firewal:10,locat:[6,4],execut:[8,1],get_job:8,configur:[0,1,2,3,4,5,8,9,10,11],activ:[8,1,4],behind:8,should:[1,3,4,5,6,8,9,10],ec2_instance_typ:4,busi:1,dict:[1,2,3,4,8,6],all_upper_cas:11,local:[0,11,4],finished_st:[6,8],meant:11,ani:[1,2,4,5,6,8,9,10,11],hit:[6,1,3,9],contribut:[0,11],variou:[3,4],get:[0,2,3,5,6,7,8,10,11],familiar:11,between:[1,4],pypi:2,autom:10,isn:10,aim:5,amazon:[5,0,2,9,10],ssh:[2,4],report:1,ambiti:11,requir:[0,1,2,4,5,10,11],target:3,base_nomm:[7,1],possibl:[6,11,1],simpledb_ec2_nommer_state_domain:4,"public":10,"default":[1,2,3,4],bad:3,stuff:2,common:6,obviou:11,contain:[1,2,3,4,8,9,6],get_num_active_thread:1,i_did_someth:1,is_finish:6,where:[0,3,4,5,6,11],remov:8,view:9,set:[1,2,3,4,7,8,9,6,11],stump:[0,11],accord:5,see:[0,1,2,3,4,8,9,6,11],bare:10,result:[5,1,2],respons:[1,3],reserv:8,best:[10,6,11],subject:5,success:[5,6,3],statu:[5,0,6,1,4],said:[6,11,8,2,4],stuck:8,someth:[1,2,3,4,8,11],topmost:6,aws_secret_kei:3,state:[1,2,3,4,6,8,10],won:[6,11,4],prune:8,"import":[1,3,4,8,6,11],attribut:4,altern:0,assumpt:[0,2],kei:[1,2,3,4,8,9,6],style:[0,11],lazi:1,badinput:3,nommerd_new_job_check_interv:[1,4],come:5,get_instance_id:1,ec2instancemanag:8,both:[10,6],deadlock:11,last:[10,6,1],easi:[5,11],boto:[6,0,8],plugin:[10,8,1,9,4],set_job_st:[6,1],howev:5,job:[1,2,3,4,5,6,8,9,10],against:1,job_cach:[7,8],etc:[8,4],instanc:[0,1,2,4,5,6,8,9,10,11],logic:[8,1,9],mani:[5,6,1,4],com:[0,11,3],load:[5,10,6,1,8],simpli:[10,7,8,4],point:[10,8],instanti:6,schedul:[5,10,1,3],unittest:11,outfil:[1,2,4],period:[5,10,9],pop:[10,6],littl:[5,11],linux:2,typic:4,throughout:11,panel:2,backend:[6,4],ultim:2,duo:5,mandatori:3,due:2,been:[8,6,1],mark:[5,8],compon:10,json:[5,0,2,3,10],much:[5,8,2],interest:[8,0,7,1,4],modif:11,feederd:[0,1,2,3,4,5,6,7,8,9,10,11],popul:6,dure:[10,1],remove_job:8,rather:8,fire:1,worker:[5,1,9],argument:4,ridden:4,child:1,quick:11,spin:5,submiss:2,those:[5,11,2,4],bore:11,emploi:4,look:[1,2,3,4,5,8,9,10,11],upload_to_destin:1,servic:[5,0,1,2],commerci:[5,0],employ:11,defin:[8,4],"while":[11,2],abov:1,error:[6,8,3],fun:11,everyon:11,capword:11,spawn:[10,8,4],earli:2,layer:1,customiz:5,virtualenvwrapp:2,advantag:5,xxxxxxxxx:2,non:[8,1],destin:1,basenomm:[1,9],itself:[7,1,11,9,4],motiv:10,conf:[0,1,2,4,7,8],lightweight:10,crash:8,tediou:11,twistd:[11,3],develop:[0,11,2,4],config_s3_bucket:4,minim:4,receiv:9,media:[0,1,2,3,4,5,6,7,8,9,10,11],make:[1,2,3,4,6,11],shorten:2,same:[5,11,1,4],keynam:3,handl:[10,6,1,8],complex:[10,11],media_nomm:[0,1,2,4,6,7,8,9,10,11],pop_state_changes_from_queu:6,pai:[5,0],document:[0,2,3,4,6,11],start:[0,1,2,3,4,7,8,10,11],conflict:[2,3],higher:[6,2],week:11,finish:[6,11,8,4],http:[6,0,11,3],update_job:8,outfile_opt:[1,2,3,4],hang:8,evil:11,hand:9,director:5,capabl:6,rais:[5,6,1],temporari:1,user:[0,1,4],improv:0,extern:1,build:11,media_nommer_ec2nommer_st:4,stack:6,recent:[6,8],lower:[10,6],task:[10,6,1,8],off:[10,1,2,9],center:10,whole:11,source_path:[6,3],encumb:5,without:11,thought:[10,6,1],pep8:11,exampl:[0,1,2,3,4,6,9,10,11],command:[1,3,9,4],thi:[0,1,2,3,4,5,6,7,8,10,11],get_cached_job:8,nomconf_uri:4,programm:11,everyth:[5,6,11,1],usual:1,comment:11,wrapped_set_job_st:1,protocol:[6,1,4],entri:[10,11,8],just:[1,2,5,8,6,11],when:[1,3,4,8,6,11],obtain:[0,11],rest:[2,3],indic:0,movie_high_q:3,kill:4,error_cod:3,monei:[5,10,9],flavor:2,manner:[8,0,6,1],aws_access_key_id:[2,4],web:[2,3,5,8,10,11],expos:[5,10],is_loc:1,had:[5,2],except:[6,1],job_id:3,add:[1,2,3],valid:[8,4],overview:[5,0],els:[6,11,4],supervisor:[11,2],save:[5,10,6,9],match:8,s3backend:6,ami:[10,8,2,4],applic:[10,1,3],royalti:5,around:5,format:[5,6,1,3],read:5,foundat:[1,9],piec:6,fast:0,camelcas:11,game:5,know:[10,1,2,3,8],background:[5,0],elabor:3,bit:[8,1],licens:[5,0,11],horsepow:0,saniti:2,knock:5,daemon:[1,2,3,4,5,8,9,10,11],is_job_cach:8,resid:[8,4],like:[0,1,2,3,4,5,9,6,11],specif:[8,6,1,9],task_manage_ec2_inst:8,threaded_manage_ec2_inst:8,node_st:[7,1],server:[10,11,1,2,8],collect:0,conceiv:8,either:3,manpow:8,output:[6,1,3],uppercas:4,manag:[1,2,4,5,6,8,9,10],unabl:3,encount:3,exceed:4,"1f40fc92da241694750979ee6cf582f2d5d7d28e1833":3,often:[5,4],simplifi:2,interv:[8,1,4],interact:[5,6],some:[0,1,2,4,5,8,9],duointeract:[0,11],dead:8,infilenam:1,understood:11,intern:11,occas:8,home:[6,4],inact:[5,10,1,4],librari:[0,7,2,3],threaded_encode_job:1,virtualenv:[11,2],guid:11,easili:10,avoid:[11,1],though:4,per:[6,8,2,4],track:[5,10,6,1,2],tracker:[0,11,2,3],larg:[5,0,4],unit:[5,0,11],condit:1,refer:[6,0,7,8,3],threaded_heartbeat:1,core:[10,0,7,8,6],who:5,run:[0,1,2,3,4,5,6,8,9,10,11],power:0,blankli:3,brawn:10,usag:0,trivial:11,wipe_all_job_data:6,host:[10,3],notify_url:[6,3],although:4,upload_set:4,post:3,stage:2,comparison:10,about:[0,11],actual:[10,11,1,2,8],zip:2,column:11,materi:7,ordeal:11,page:[5,0,7,11],incur:2,idl:4,preset:[0,1,2,3,4,9],neighbor:11,act:1,fals:[8,6,1,3],commit:11,produc:1,block:[8,1],componenet:5,own:[5,10,3,9],get_jobs_with_st:8,visit:[11,2],sameq:[1,3,4],within:[11,8,2,4],encod:[0,1,2,3,4,5,6,7,8,9,10],thread_count_mod:1,automat:[0,9],appropri:[6,9],down:[10,6],pair:2,right:[11,1],empti:[5,6],wrap:[1,3,9],chang:[6,11,8,4],announc:8,storag:[6,4],mere:[1,4],necessari:[11,1],merg:11,stare:3,git:11,wai:[10,0,11,2],aren:11,support:[2,4],question:11,"long":[8,1,4],custom:[5,10,3],avail:[8,2,9],width:11,compliant:2,includ:[11,9,4],lot:[10,11],discard:4,machin:[10,11,2,4],nose:11,entir:[0,11,3],"function":[8,6,1],pop_new_jobs_from_queu:6,form:3,offer:5,job_stat:[6,8],basic:[5,1,2,8],nommerd_max_inact:4,back:1,cloud:[10,9],skip:11,line:4,idea:11,"true":[1,2,3,4,8,6],bug:11,dest_path:[6,3],faster:11,pull:[10,11,9],made:[11,8],perform:[8,1],input:3,consist:1,reload:8,whether:[10,6,1],wish:10,access:[6,11,8,2,4],bucket:[2,3,4],maximum:4,until:[5,10],onomnom:1,below:1,limit:[6,0],indefinit:8,lowercas:11,otherwis:[8,1],jobstatebackend:[6,8],is_ec2_inst:1,expect:11,gone:6,featur:[10,11],hash:6,creat:[1,2,3,4,6,8,9,10,11],get_inst:8,"int":[8,6,1],cover:5,"abstract":[6,1],pid:11,doesn:[11,8],repres:[6,8],twist:[0,1,4,8,9,10],exist:[8,6,11,1,3],file:[6,1,2,3,4],pip:[11,2],threaded_prune_job:8,check:[1,2,3,4,5,8],link:0,probabl:[7,8,11],mp4:3,aws_id:3,new_stat:1,tip:[6,11,1,4],detail:[1,2,3,4,8,9,6],virtual:11,taker:2,field:1,other:[5,3,4],bool:[8,6,1],test:[0,11],task_check_for_job_state_chang:8,you:[0,1,2,3,4,5,6,7,9,10,11],architectur:[10,0],node:[5,10,1,4],get_backend_for_uri:6,notif:6,wildcard:11,assist:1,outfilenam:1,docstr:11,scale:[10,0],consid:[6,8,4],pool:8,bulk:0,infile_opt:[1,2,3],haven:8,sqs_job_state_change_queue_nam:[8,4],directori:[11,2,4],reliabl:0,feederd_job_state_change_check_interv:4,update_settings_from_modul:4,feederd_prune_jobs_interv:4,wildli:2,gracefulli:8,time:[1,2,4,5,6,8,9,10],push:4},objtypes:{"0":"py:module","1":"py:data","2":"py:function","3":"py:classmethod","4":"py:class","5":"py:method","6":"py:attribute"},titles:["media-nommer: A Python-based media encoder system","media_nommer.ec2nommerd","Installation","Using feederd&#8217;s JSON API","media_nommer.conf","An Introduction to media-nommer","media_nommer.core","media-nommer module reference","media_nommer.feederd","ec2nommerd","feederd","Hacking on media-nommer"],objnames:{"0":"Python module","1":"Python data","2":"Python function","3":"Python class method","4":"Python class","5":"Python method","6":"Python attribute"},filenames:["index","apiref/ec2nommerd","installation","jsonapi","apiref/conf","introduction","apiref/core","apiref/index","apiref/feederd","ec2nommerd","feederd","hacking"]})