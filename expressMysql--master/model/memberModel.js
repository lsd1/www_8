import BaseModel from './baseModel';

import Member from '../models/mge_member';

class MemberModel extends BaseModel{
    constructor(){
        super(Member);
        this.model = super.getModel();
        this.model.sync();
    }

    //钻石递增
    diamondIncrement(uno, num){
        this.model.findById(uno).then(member => {
            return member.increment('diamond', {by: num});
        });
    }

    //钻石递减
    diamondDecrement(uno, num){
        this.model.findById(uno).then(member => {
            if(member.diamond < num){
                throw new Error(110, "diamond_not_enough");
            }
            return member.decrement('diamond', {by: num});
        });
    }

    //冻结钻石递增
    freezeDiamondIncrement(uno, num){
        this.model.findById(uno).then(member => {
            return member.increment('freeze_diamond', {by: num})
        });
    }

    //冻结钻石递减
    freezeDiamondDecrement(uno, num){
        this.model.findById(uno).then(member => {
            if(member.freeze_diamond < num){
                throw new Error(110, "freeze_diamond_error");
            }
            return member.decrement('freeze_diamond', {by: num})
        });
    }

    //参与竞猜冻结钻石
    async delDiamond(uno, num){
        let member = await this.model.findById(uno);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw new Error(110, "diamond_not_enough");
        }
        await member.decrement('diamond', {by: Number(num)});
        await member.increment('freeze_diamond', {by: Number(num)});
        let newMember = await member.reload();
        return {type:'0', before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:Number(num)}
    }


    //取消竞猜变更解冻钻石
     async addDiamond(uno, num){
        let member = await this.model.findById(uno);
        let before_change = member.diamond;
        if(member.freeze_diamond < num){
            throw new Error(110, "freeze_diamond_error");
        }
        await member.increment('diamond', {by: Number(num)});
        await member.decrement('freeze_diamond', {by: Number(num)});
        let newMember = await member.reload();
        return {type:1, before_change:before_change, change:Number(num), after_change:newMember.diamond, vsc:0, freeze_diamond:-Number(num)}
    }

}
module.exports = new MemberModel();