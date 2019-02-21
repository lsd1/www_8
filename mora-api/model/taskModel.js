import BaseModel from './baseModel';

import Task from '../models/game_task';

class TaskModel extends BaseModel{
    constructor(){
        super(Task);
        this.model = super.getModel();
        this.model.sync();
    }
}

module.exports = new TaskModel();