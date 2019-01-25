import Sequelize from 'sequelize';
import cls from 'continuation-local-storage';
const namespace = cls.createNamespace('my-namespace');
Sequelize.useCLS(namespace);
const config = {
	database:'game_mora',
	user: 'root',
	pwd: 'root',
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
};

const sequelize = new Sequelize(config['database'], config['user'], config['pwd'], {
    dialect: config['dialect'],
    timezone:'+8:00'
});

sequelize.authenticate().then(() => {
    console.log('数据库连接成功...')
}).catch(err => {console.error('数据库连接失败...', err)});

export {sequelize, config};