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
    async getLogListByUid (uid, limit, lastId, type){
        limit = limit > 0 ? limit : 10;
        let where = {uid: Number(uid)};
        if(type === '1' || type === '0'){
            where.type = type;
        }else if(Number(lastId) > 0){
            where.id = {[Sequelize.Op.lt]: Number(lastId)};
        }
        return await this.model.findAll({
            attributes:  { exclude: ['uid', 'traget_uid', 'created_at'] },
            where: where,
            limit: Number(limit),
            order:[['id','DESC']]
        });
    }
}

module.exports = new DiamondLogModel();