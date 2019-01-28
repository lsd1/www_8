import BaseModel from './baseModel';

import Member from '../models/game_member';

class MemberModel extends BaseModel{
    constructor(){
        super(Member);
        this.model = super.getModel();
        this.model.sync();
    }

    //递增 钻石
    async diamondIncrement(uid, num){
        let member = await this.model.findByPk(uid);
        let before_change = member.diamond;
        await member.increment('diamond', {by: num});
        let newMember = await member.reload();
        return {type:'1', uid: uid, before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //递增 冻结钻石
    async freezeDiamondIncrement(uid, num){
        let member = await this.model.findByPk(uid);
        await member.increment('freeze_diamond', {by: num});
        return {freeze_diamon: Number(num)}
    }

    //递减 钻石
    async diamondDecrement(uid, num){
        let member = await this.model.findByPk(uid);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw Error('diamond_not_enough');
        }
        await member.decrement('diamond', {by: num});
        let newMember = await member.reload();
        return {type:'0', uid: uid, before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //递减 钻石
    async diamondDecrement2(uid, num){
        let member = await this.model.findByPk(uid);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw Error('diamond_not_enough');
        }
        await member.decrement('diamond', {by: num});
        let newMember = await member.reload();
        return {type:'0', uid: uid, before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //递减 冻结钻石
    async freezeDiamondDecrement(uid, num){
        let member = await this.model.findByPk(uid);
        console.log('member', JSON.stringify(member));
        console.log('neeNum:', num);
        let before_change = member.diamond;
        if(member.freeze_diamond < num){
            throw Error('freeze_diamond_error');
        }
        await member.decrement('freeze_diamond', {by: num});
        return {freeze_diamon: -Number(num)}
    }

    //冻结钻石
    async freezeDiamond(uid, num){
        let member = await this.model.findByPk(uid);
        console.log(uid, num);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw Error('diamond_not_enough');
        }
        await member.decrement('diamond', {by: Number(num)});
        await member.increment('freeze_diamond', {by: Number(num)});
        let newMember = await member.reload();
        return {type:'0', uid: uid, before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:Number(num)}
    }

    //解冻钻石
     async unfreezeDiamond(uid, num){
        console.log('id:',uid);
        console.log('num:',num);
        let member = await this.model.findByPk(uid);
        console.log('memberInfo:', JSON.stringify(member));
        console.log('freeze_diamond:', member.freeze_diamond);
        console.log('needNum:', num);
        let before_change = member.diamond;
        if(member.freeze_diamond < num){
            throw Error('freeze_diamond_error');
        }
        await member.increment('diamond', {by: Number(num)});
        await member.decrement('freeze_diamond', {by: Number(num)});
        let newMember = await member.reload();
        return {type:'1', uid: uid, before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:-Number(num)}
    }

    async getMemberInfoById(id, attribute){
        let options = {};
        if(attribute){
            options = {attributes: attribute};
        }
        try {
            return await this.model.findByPk(id, options);
        }catch (e) {
            console.log(e);
            throw e;
        }

    }

    async findOrBuildMember(where,params){
           let memberInfo = await this.model.findOrCreate({where: where, defaults: params});
           return memberInfo;
            // .spread((user, created) => {
            //     console.log(user.get({
            //         plain: true
            //     }))
    }

}
module.exports = new MemberModel();