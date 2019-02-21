import Sequelize from 'sequelize';
import cls from 'continuation-local-storage';
import config from './config.js';
import {info} from './log.js';
const namespace = cls.createNamespace('my-namespace');
Sequelize.useCLS(namespace);
const sequelize = new Sequelize(config['database'], config['user'], config['pwd'], {
    dialect: config['dialect'],
    timezone:'+8:00',
    logging:info
});
sequelize.authenticate().then(() => {
    console.log('数据库连接成功...')
}).catch(err => {console.error('数据库连接失败...', err)});

export {sequelize, config};