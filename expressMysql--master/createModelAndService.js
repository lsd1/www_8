// 解析名称做成驼峰命名法
import fs from 'fs';
const modelsPath = '../models';
const modelPath = './model';

const createModelAndService = () => {
    let files = fs.readdirSync('./models');
    let nameArr = [];
    files.forEach(item => {
        let snakeName = item.split('.')[0];
        let names = snakeName.split('_');
        let CameName = '';//大驼峰
        let cameName = '';//小驼峰
        for (let i = 1; i < names.length; i++) {
            CameName += names[i].substring(0, 1).toUpperCase() + names[i].substring(1);
            if (i == 1) {
                cameName += names[i].substring(0, 1).toLowerCase() + names[i].substring(1);
            } else {
                cameName += names[i].substring(0, 1).toUpperCase() + names[i].substring(1);
            }

        }
        nameArr.push([CameName, cameName]);
        buildModel(CameName, cameName, snakeName);
        buildService(CameName, cameName);
        buildRoute(cameName);
    });
    buildAutoWrite(nameArr);
};

const createFile = (filename, template) => {
    fs.writeFile(filename, template, function () {
       console.log(filename + '文件创建成功');
    });
};

//创建Model文件
const buildModel = (CameName, cameName, snakeName) => {
    //处理Model.js;
    let template_model =
        `import BaseModel from './baseModel';

import ${CameName} from '${modelsPath}/${snakeName}';

class ${CameName}Model extends BaseModel{
    constructor(){
        super(${CameName});
        this.model = super.getModel();
        this.model.sync();
    }
}

module.exports = new ${CameName}Model();`;

    let filename = modelPath + "/" + cameName + "Model.js";
    createFile(filename, template_model);
};


//创建Service文件
const buildService = (CameName, cameName) => {
    //处理service
    let template_service =
        `import BaseService from './baseService';

import {AutoWrited${CameName}Model} from '../common/AutoWrite';

@AutoWrited${CameName}Model

class ${CameName}Service extends BaseService{
    constructor(){
        super(${CameName}Service.model);
    }
}

module.exports = new ${CameName}Service();`;

    createFile(`./service/${cameName}Service.js`, template_service);
};

//创建AutoWrite.js文件
const buildAutoWrite = (nameArr) => {
    //autoWrite头部
    let template_auto_write = `module.exports = {`;
    nameArr.forEach(item => {

        //autoWrite内容
        template_auto_write +=
        `
    AutoWrited${item[0]}Model(target, key, descriptor){
        target.model = require('../model/${item[1]}Model');
    },`;

    });

    //autoWrite尾部
    template_auto_write +=`
};`;

    createFile('./common/AutoWrite.js', template_auto_write);
};


const buildRoute = (cameName) => {

    let template_route = `import express from 'express';

import ${cameName}Service from '../service/${cameName}Service.js';

const router = express.Router();

class ${cameName}Ctroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await ${cameName}Service.baseFindAll());}catch(err){next(err);}
		});

		router.put('/update', async (req, res, next) => {
			try{res.json(await ${cameName}Service.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await ${cameName}Service.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await ${cameName}Service.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = ${cameName}Ctroller.initRouter();`;

    createFile(`./routes/${cameName}Ctrl.js`, template_route);
};

export {createModelAndService, buildModel, buildService, buildAutoWrite, createFile, buildRoute};


