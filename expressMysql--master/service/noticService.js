import BaseService from './baseService';

import {AutoWritedNoticModel} from '../common/AutoWrite';

@AutoWritedNoticModel

class NoticService extends BaseService{
    constructor(){
        super(NoticService.model);
    }
}

module.exports = new NoticService();