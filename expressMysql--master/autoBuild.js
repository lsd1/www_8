import SequelizeAuto from 'sequelize-auto';
import {config} from './config/db';
import {createModelAndService} from './createModelAndService';
const autoBuild = new SequelizeAuto(
    config['database'],
    config['user'],
    config['pwd'],
    {
        host: config['host'],
        dialect: config['dialect'],
        port: config['port'],
        directory: 'models', // prevents the program from writing to disk
        additional: {
            timestamps: false
        }
    }
);
// autoBuild.run(function (err) {
//     if (err) throw err;
//     console.log(autoBuild.tables); // table list
//     console.log(autoBuild.foreignKeys); // foreign key list
// });

setTimeout(function () {
    createModelAndService();
}, 3000);


