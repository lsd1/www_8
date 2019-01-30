import BaseModel from './baseModel';

import Notic from '../models/game_notic';

class NoticModel extends BaseModel{
    constructor(){
        super(Notic);
        this.model = super.getModel();
        this.model.sync();
    }
}

module.exports = new NoticModel();