import BaseModel from './baseModel';
import Sequelize from 'sequelize';
import DiamondLog from '../models/game_diamond_log';

class DiamondLogModel extends BaseModel{
    constructor(){
        super(DiamondLog);
        this.model = super.getModel();
        this.model.sync();
    }

    //获取用户资产记录。
    getLogListByUid (uid, limit, lastId, type){
        limit = limit || 10;
        lastId = lastId || 0;
        let where = {uid: Number(uid), id:{[Sequelize.Op.gt]: Number(lastId)}};

        if(type !== undefined){
            where.type = type;
        }

        return this.model.findAll({
            attributes:  { exclude: ['uid', 'traget_uid', 'created_at'] },
            where: where,
            limit: Number(limit)
        });
    }
}

module.exports = new DiamondLogModel();