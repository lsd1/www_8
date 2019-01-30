import BaseService from './baseService';

import {AutoWritedTaskModel} from '../common/AutoWrite';

@AutoWritedTaskModel

class TaskService extends BaseService{
    constructor(){
        super(TaskService.model);
    }
}

module.exports = new TaskService();