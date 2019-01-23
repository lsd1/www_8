import BaseModel from './baseModel';
import Sequelize from 'sequelize';
import DiamondLog from '../models/mge_diamond_log';

class DiamondLogModel extends BaseModel{
    constructor(){
        super(DiamondLog);
        this.model = super.getModel();
        this.model.sync();
    }

    //获取用户资产记录。
    getLogListByUno (uno, limit, lastId, type){
        limit = limit || 10;
        lastId = lastId || 0;
        let where = {uno: Number(uno), id:{[Sequelize.Op.gt]: Number(lastId)}};

        if(type !== undefined){
            where.type = type;
        }

        return this.model.findAll({
            attributes:  { exclude: ['uno', 'traget_uno', 'created_at'] },
            where: where,
            limit: Number(limit)
        });
    }
}

module.exports = new DiamondLogModel();