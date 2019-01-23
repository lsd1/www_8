import BaseService from './baseService';

import {AutoWritedMemberModel} from '../common/AutoWrite';

@AutoWritedMemberModel

class MemberService extends BaseService{
    constructor(){
        super(MemberService.model);
    }

    //钻石递增
    diamondIncrementService(uno, num){
        return MemberService.model.diamondIncrement(uno, num);
    }

    //钻石递减
    diamondDecrementService(uno, num){
        return MemberService.model.diamondDecrement(uno, num);
    }

    //冻结钻石递增
    freezeDiamondIncrementService(uno, num){
        return MemberService.model.freezeDiamondIncrement(uno, num);
    }

    //冻结钻石递减
    freezeDiamondDecrementService(uno, num){
        return MemberService.model.freezeDiamondDecrement(uno, num);
    }

    //取消竞猜
    cancelMoraService(uno, num){
        return MemberService.model.addDiamond(uno, num);
    }

    //参与竞猜
    participateMoraService(uno, num){
        return MemberService.model.delDiamond(uno, num);
    }
}

module.exports = new MemberService();