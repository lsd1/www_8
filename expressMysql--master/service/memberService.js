import BaseService from './baseService';

import {AutoWritedMemberModel} from '../common/AutoWrite';

@AutoWritedMemberModel

class MemberService extends BaseService{
    constructor(){
        super(MemberService.model);
    }
}

module.exports = new MemberService();