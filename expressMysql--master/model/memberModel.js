import BaseModel from './baseModel';

import Member from '../models/mge_member';

class MemberModel extends BaseModel{
    constructor(){
        super(Member);
        this.model = super.getModel();
        this.model.sync();
    }
}

module.exports = new MemberModel();