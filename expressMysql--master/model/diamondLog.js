import BaseModel from './baseModel.js';
import DiamondLog from '../models/mge_diamond_log';
class DiamondLogModel extends BaseModel{
	constructor(){
		super(DiamondLog);
		this.model = super.getModel();
		this.model.sync();
	}
}

module.exports = new DiamondLogModel();