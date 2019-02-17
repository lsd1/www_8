import BaseService from './baseService';
import {AutoWritedTaskModel} from '../common/AutoWrite';
import MemberService from './memberService';
import NoticService from './noticService';

@AutoWritedTaskModel

class TaskService extends BaseService{
    constructor(){
        super(TaskService.model);
    }
    async listenTaskService(uid){
        let allTask = await TaskService.model.findByFilter(['id'], {uid: uid, status: 0});
        allTask.forEach(async item => {
            switch (item.type) {
                case 1:
                    let res1 = await MemberService.exchangeDiamondStep2(item.join_id, item.uid);
                    if(res1.code == 0){
                        this.baseUpdate({status: 1}, {id: item.id});
                        let noticeData = {
                            uid:uid,
                            content:'diamond_arrive'
                        };
                        await NoticService.baseCreate(noticeData);
                    }
                break;
                case 2:
                    let res2 = await MemberService.exchangeVscStep2(item.join_id, item.uid);
                    if(res2.code == 0){
                        this.baseUpdate({status: 1}, {id: item.id});
                        let noticeData = {
                            uid:uid,
                            content:'vsc_arrive'
                        };
                        await NoticService.baseCreate(noticeData);
                    }
                break;
            }
        });
    }
}

module.exports = new TaskService();