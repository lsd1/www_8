import BaseService from './baseService.js';

import {AutoWritedDiamondLogModel} from '../common/AutoWrite.js';

@AutoWritedDiamondLogModel

class DiamondLogService extends BaseService{
	constructor(){
		super(DiamondLogService.model);
	}
}

module.exports = new DiamondLogService();