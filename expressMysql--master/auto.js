import SequelizeAuto from 'sequelize-auto';
import {config} from './config/db';
const auto = new SequelizeAuto(
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
auto.run(function (err) {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});