import BaseModel from './baseModel';
import MemberModel from './memberModel';
import {sequelize} from '../config/db.js';
import Sequelize from 'sequelize';
import OrderMora from '../models/mge_order_mora';
class OrderMoraModel extends BaseModel{
    constructor(){
        super(OrderMora);
        this.model = super.getModel();

        this.model.sync();
    }

    //根据竞猜等级分组，获取待竞猜的房间数量
    getRoomNum(){
        return this.model.findAll({
            attributes:['grade',
                [sequelize.fn('COUNT', sequelize.col('id')), 'number']
            ],
            group:'grade',
            where:{status:'0'}
        })
    }

    async getRoomInfoById(id){
        let resData = await this.model.findByPk(id, {
            attributes:['id', 'uno', 'grade', ['diamond_number', 'amount'], 'shape', 'target_uno', 'target_shape', 'status'],
            include:{
                model:MemberModel.model,
                where: { uno: Sequelize.col('mge_member.uno') },
                attributes:['user_name','user_avatar']
            }
        });
        return this.toFlat(resData);
    }

    async getRoomListByUno(uno){
        let resData = await this.findByFilter(['id', 'grade', ['diamond_number', 'amount'], 'shape'], {uno: uno, status: '0'});
        return this.toFlat(resData);
    }

    async getRecordListByUno(uno, lastId, limit){
        lastId = lastId || 0;
        limit = limit || 10;
        this.model.belongsTo(MemberModel.model, {foreignKey:'target_uno'});
        let resData = await this.model.findAll(
            {
                attributes:['id', 'uno', 'grade', ['diamond_number', 'amount'], 'shape', 'target_uno', 'target_shape', 'status', 'updated_at'],
                include:{
                    model:MemberModel.model,
                    attributes:[['user_name', 'target_user_name'], ['user_avatar', 'target_user_avatar']]
                },
                where: {
                    uno: Number(uno),
                    status: {[Sequelize.Op.gt]: '1'},
                    id: {[Sequelize.Op.gt]: Number(lastId)}
                },
                limit: Number(limit)
            }
        );
        return this.toFlat(resData);
    }
}

module.exports = new OrderMoraModel();