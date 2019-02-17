import BaseModel from './baseModel';
import Member from '../models/game_member';
import {trans} from '../translate/index';
class MemberModel extends BaseModel{
    constructor(){
        super(Member);
        this.model = super.getModel();
        this.model.sync();
    }

    //递增 钻石
    async diamondIncrement(uid, num, transaction){
        num = Number(num);
        let member = await this.model.findByPk(uid, transaction);
        let before_change = member.diamond;
        let options = {by: num};
        if(transaction){
            options.transaction = transaction.transaction;
        }
        await member.increment('diamond', options);
        let newMember = await member.reload(transaction);
        return {type:'1', uid: uid, before_change:before_change, change:num, after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //递增 冻结钻石
    async freezeDiamondIncrement(uid, num, transaction){
        num = Number(num);
        let member = await this.model.findByPk(uid, transaction);
        let options = {by: num};
        if(transaction){
            options.transaction = transaction.transaction;
        }
        await member.increment('freeze_diamond', options);
        return {freeze_diamon: num}
    }

    //递减 钻石
    async diamondDecrement(uid, num, transaction){
        num = Number(num);
        let member = await this.model.findByPk(uid, transaction);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw Error("{code:110, msg:'diamond_not_enough'}");
        }
        let options = {by: num};
        if(transaction){
            options.transaction = transaction.transaction;
        }
        await member.decrement('diamond', options);
        let newMember = await member.reload(transaction);
        return {type:'0', uid: uid, before_change:before_change, change:num, after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //递减 钻石
    async diamondDecrement2(uid, num, transaction){
        num = Number(num);
        let member = await this.model.findByPk(uid, transaction);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw Error("{code:110, msg:'diamond_not_enough'}");

        }
        let options = {by: num};
        if(transaction){
            options.transaction = transaction.transaction;
        }
        await member.decrement('diamond', options);
        let newMember = await member.reload(transaction);
        return {type:'0', uid: uid, before_change:before_change, change:num, after_change:newMember.diamond, vsc:0, freeze_diamond:0}
    }

    //递减 冻结钻石
    async freezeDiamondDecrement(uid, num, transaction){
        num = Number(num);
        let member = await this.model.findByPk(uid, transaction);
        let before_change = member.diamond;
        if(member.freeze_diamond < num){
            throw Error("{code:110, msg:'error'}");

        }
        let options = {by: num};
        if(transaction){
            options.transaction = transaction.transaction;
        }
        await member.decrement('freeze_diamond', options);
        return {freeze_diamon: -num}
    }

    //冻结钻石
    async freezeDiamond(uid, num, transaction){
        num = Number(num);
        let member = await this.model.findByPk(uid, transaction);
        let before_change = member.diamond;
        if(member.diamond < num){
            throw Error("{code:110, msg:'diamond_not_enough'}");

        }
        let options = {by: num};
        if(transaction){
            options.transaction = transaction.transaction;
        }
        await member.decrement('diamond', options);
        await member.increment('freeze_diamond', options);
        let newMember = await member.reload(transaction);
        return {type:'0', uid: uid, before_change:before_change, change:num, after_change:newMember.diamond, vsc:0, freeze_diamond:num}
    }

    //解冻钻石
     async unfreezeDiamond(uid, num, transaction){
        num = Number(num);
        let member = await this.model.findByPk(uid, transaction);
        let before_change = member.diamond;
        if(member.freeze_diamond < num){
            throw Error("{code:110, msg:'error'}");
        }
         let options = {by: num};
         if(transaction){
             options.transaction = transaction.transaction;
         }
        await member.increment('diamond', options);
        await member.decrement('freeze_diamond', options);
        let newMember = await member.reload(transaction);
        return {type:'1', uid: uid, before_change:before_change, change:num, after_change:newMember.diamond, vsc:0, freeze_diamond:-num}
    }

    async getMemberInfoById(id, attribute, transaction){
        let options = {};
        if(transaction){
            options.transaction = transaction.transaction;
        }
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

    async findOrBuildMember(where, params, transaction){
        let option = {where: where, defaults: params};
        if(transaction){
            options.transaction = transaction.transaction;
        }
        return await this.model.findOrCreate(option);
    }

}
module.exports = new MemberModel();