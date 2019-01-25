import BaseModel from './baseModel';

import Member from '../models/game_member';

class MemberModel extends BaseModel{
    constructor(){
        super(Member);
        this.model = super.getModel();
        this.model.sync();
    }

    //钻石递增
    async diamondIncrement(uid, num){
        let member = await this.model.findById(uid);
        let before_change = member.diamond;
        await member.increment('diamond', {by: num});
        let newMember = await member.reload();
        return {type:'1', before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //钻石递减
    async diamondDecrement(uid, num){
        let member = await this.model.findById(uid);
        let before_change = member.diamond;
        if(member.diamond < num){
            return {err:"diamond_not_enough"}
        }
        await member.decrement('diamond', {by: num});
        let newMember = await member.reload();
        return {type:'0', before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //冻结钻石递增
    async freezeDiamondIncrement(uid, num){
        this.model.findById(uid).then(member => {
            return member.increment('freeze_diamond', {by: num})
        });
    }

    //冻结钻石递减
    async freezeDiamondDecrement(uid, num){
        let member = await this.model.findById(uid);
        let before_change = member.diamond;
        if(member.freeze_diamond < num){
            return {err:"freeze_diamond_error"}
        }
        await member.decrement('freeze_diamond', {by: num});
        let newMember = await member.reload();
        return {type:'0', before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:-Number(num)}
    }

    //参与竞猜冻结钻石
    async delDiamond(uid, num){
        let member = await this.model.findById(uid);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw Error('diamond_not_enough');
        }
        await member.decrement('diamond', {by: Number(num)});
        await member.increment('freeze_diamond', {by: Number(num)});
        let newMember = await member.reload();
        return {type:'0', before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:Number(num)}
    }

    async getMemberInfoById(id, attribute){
        console.log('id:', id);
        console.log('attribute:', attribute);
        return await this.model.findByPk(id, {attributes: attribute});
    }

    //取消竞猜解冻钻石
     async addDiamond(uid, num){
        let member = await this.model.findById(uid);
        let before_change = member.diamond;
        if(member.freeze_diamond < num){
            return {err:"freeze_diamond_error"}
        }
        await member.increment('diamond', {by: Number(num)});
        await member.decrement('freeze_diamond', {by: Number(num)});
        let newMember = await member.reload();
        return {type:1, before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:-Number(num)}
    }

}
module.exports = new MemberModel();