import BaseService from './baseService';
import {AutoWritedTaskModel} from '../common/AutoWrite';
import MemberService from './memberService';
import NoticService from './noticService';
import async from 'async';
import empty from 'is-empty';
@AutoWritedTaskModel

class TaskService extends BaseService{
    constructor(){
        super(TaskService.model);
    }
    async listenTaskService(uid, memberService, noticService) {
        let allTask = await TaskService.model.findByFilter(['id', 'type', 'join_id', 'uid'], {uid: uid, status: 0});
        let memberS = empty(MemberService) ? memberService : MemberService;
        let noticS = empty(NoticService) ? noticService : NoticService;
        allTask.forEach(async item => {
            switch (item.type) {
                case 1:
                    let res1 = await memberS.exchangeDiamondStep2(item.join_id, item.uid, true);
                    if(res1.code == 0){
                        await this.baseUpdate({status: 1}, {id: item.id});
                        let noticeData = {
                            uid:uid,
                            content:'diamond_arrive'
                        };
                        await noticS.baseCreate(noticeData);
                    }
                break;
                case 2:
                    let res2 = await memberS.exchangeVscStep2(item.join_id, item.uid, true);
                    if(res2.code == 0){
                        await this.baseUpdate({status: 1}, {id: item.id});
                        let noticeData = {
                            uid:uid,
                            content:'vsc_arrive'
                        };
                        await noticS.baseCreate(noticeData);
                    }
                break;
            }
        });
    }

    async autolistenTaskService(memberService, noticService){
        let allTask = await TaskService.model.findByFilter(['id', 'type', 'join_id', 'uid'], {status: 0});
        let noticeUid = {};
        let memberS = empty(MemberService) ? memberService : MemberService;
        let noticS = empty(NoticService) ? noticService : NoticService;
        return new Promise((resolve, reject)=>{
            async.map(allTask, async (item, cb) => {
                switch (item.type) {
                    case 1:
                        let res1 = await memberS.exchangeDiamondStep2(item.join_id, item.uid, true);
                        if(res1.code == 0){
                            await this.baseUpdate({status: 1}, {id: item.id});
                            let noticeData = {
                                uid:item.uid,
                                content:'diamond_arrive'
                            };
                            await noticS.baseCreate(noticeData);
                            noticeUid[item.uid] = item.uid;
                            cb(null, item.uid);
                        }else{
                            cb(null, null);
                        }
                        break;
                    case 2:
                        let res2 = await memberS.exchangeVscStep2(item.join_id, item.uid, true);
                        if(res2.code == 0){
                            await this.baseUpdate({status: 1}, {id: item.id});
                            let noticeData = {
                                uid:item.uid,
                                content:'vsc_arrive'
                            };
                            await noticS.baseCreate(noticeData);
                            noticeUid[item.uid] = item.uid;
                            cb(null, item.uid);
                        }else{
                            cb(null, null);
                        }
                        break;
                }
            }, (err, res)=>{
                resolve(noticeUid);
            });
        });

    }
}

module.exports = new TaskService();