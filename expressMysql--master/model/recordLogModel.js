import BaseModel from './baseModel';

import RecordLog from '../models/game_record_log';
import MemberModel from "./memberModel";
import Sequelize from "sequelize";

class RecordLogModel extends BaseModel{
    constructor(){
        super(RecordLog);
        this.model = super.getModel();
        this.model.sync();
    }

    async getRecordListByUid(uid, lastId, limit){
        lastId = lastId || 0;
        limit = limit || 10;
        this.model.belongsTo(MemberModel.model, {foreignKey:'target_uid'});
        let resData = await this.model.findAll(
            {
                attributes:['id', 'uid', 'grade', ['diamond_number', 'amount'], ['room_owner_id','roomOwner'], 'shape', 'target_uid', 'target_shape', 'status', 'updated_at'],
                include:{
                    model:MemberModel.model,
                    attributes:[['user_name', 'target_user_name'], ['user_avatar', 'target_user_avatar']]
                },
                where: {
                    uid: Number(uid),
                    id: {[Sequelize.Op.gt]: Number(lastId)}
                },
                limit: Number(limit)
            }
        );
        return this.toFlat(resData);
    }
}

module.exports = new RecordLogModel();