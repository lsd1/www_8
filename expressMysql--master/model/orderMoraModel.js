import BaseModel from './baseModel';
import MemberModel from './memberModel';
import {sequelize} from '../config/db.js';
import Sequelize from 'sequelize';
import OrderMora from '../models/game_order_mora';
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
        this.model.belongsTo(MemberModel.model, {foreignKey:'uid'});
        let resData = await this.model.findByPk(id, {
            attributes:['id', 'uid', 'grade', ['diamond_number', 'amount'], 'shape', 'target_uid', 'target_shape', 'status'],
            include:{
                model:MemberModel.model,
                where: { uid: Sequelize.col('game_member.id') },
                attributes:['user_name','user_avatar']
            }
        });
        return this.toFlat(resData);
    }

    async getRoomListByUid(uid){
        let resData = await this.findByFilter(['id', 'grade', ['diamond_number', 'amount'], 'shape'], {uid: uid, status: '0'});
        return this.toFlat(resData);
    }

    async getRecordListByUid(uid, lastId, limit){
        lastId = lastId || 0;
        limit = limit || 10;
        this.model.belongsTo(MemberModel.model, {foreignKey:'target_uid'});
        let resData = await this.model.findAll(
            {
                attributes:['id', 'uid', 'grade', ['diamond_number', 'amount'], 'shape', 'target_uid', 'target_shape', 'status', 'updated_at'],
                include:{
                    model:MemberModel.model,
                    attributes:[['user_name', 'target_user_name'], ['user_avatar', 'target_user_avatar']]
                },
                where: {
                    uid: Number(uid),
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