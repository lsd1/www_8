import Sequelize from 'sequelize';
import {sequelize} from '../config/db.js';
import moment from 'moment';
const Op = Sequelize.Op;
class BaseModel{
	constructor(model){
		this.model = model(sequelize, Sequelize);
	}

	fromtTime (time) {
		return moment(time).format('YYYY-MM-DD HH:mm:ss');
	}

    toFlat (o) {
        return JSON.parse(JSON.stringify(o).replace(/"[^"]*":\s*\{/g,'').replace(/\}{2,}/g,'}'));
    }

	// 返回实例化的sequelize模型实例
	getModel(){
		return this.model;
	}
	/**************************************查询方法**************************************/
	// 不带过滤条件的查询
	findAll(attributes){
		return attributes ? this.model.findAll({attributes: attributes}) : this.model.findAll();
	}
	// 带过滤条件的精确查询
	findByFilter(attributes, where){
		return attributes ? this.model.findAll({attributes: attributes, where: where}) : this.model.findAll({where: where});
	}
	// 带过滤条件的排序精确查询
	findByFilterOrder(attributes, where, order){
		let orderOps = [[order, 'DESC']];
		return attributes ? this.model.findAll({attributes: attributes, where: where, order: orderOps}) : this.model.findAll({where: where, order: orderOps});
	}
	// 带过滤条件的模糊查询
	findLikeByFilter(attributes, where){
		let whereOps = {};
		for(let k in where){whereOps[k] = {[Op.like]: '%'+where[k]+'%'}};
		return attributes ? this.model.findAll({attributes: attributes, where: whereOps}) : this.model.findAll({where: whereOps});
	}
	// 带过滤条件的排序模糊查询
	findLikeByFilterOrder(attributes, where, order){
		let orderOps = [[order, 'DESC']];
		let whereOps = {};
		for(let k in where){whereOps[k] = {[Op.like]: '%'+where[k]+'%'}};
		return attributes ? this.model.findAll({attributes: attributes, where: whereOps, order: orderOps}) : this.model.findAll({where: whereOps, order: orderOps});
	}
	/**************************************更新方法**************************************/
	// 当where为null则批量更新表；当where为条件则条件更新表
	update(attributes, where){
		return where ? this.model.update(attributes, {where: where}) : this.model.update(attributes, {where:{}});
	}
	/**************************************删除方法**************************************/
	// 条件删除
	delete(where){
		return this.model.destroy({where: where});
	}
	/**************************************插入方法**************************************/
	// 插入单个实体
	create(entity, option){
        option = option || {};
		return this.model.create(entity, option);
	}
	// 批量插入实体集
	createBatch(entitys){
		return this.model.bulkCreate(entitys);
	}
}
module.exports = BaseModel;