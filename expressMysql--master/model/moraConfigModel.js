import BaseModel from './baseModel';

import MoraConfig from '../models/mge_mora_config';

class MoraConfigModel extends BaseModel{
    constructor(){
        super(MoraConfig);
        this.model = super.getModel();
        this.model.sync();
    }
}

module.exports = new MoraConfigModel();