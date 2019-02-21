import log4js from 'log4js';
log4js.configure({
    appenders: {
        // stdout: { type: 'stdout' }, //声明此属性可在控制台上打印信息
        sql: { type: 'dateFile', filename: 'logs/sqlLog' , pattern: 'yyyyMMdd.log', "alwaysIncludePattern": true},
        err: { type: 'dateFile', filename: 'logs/errLog' , pattern: 'yyyyMMdd.log', "alwaysIncludePattern": true}
    },
    categories: {
        default: { appenders: ['sql'], level: 'info' },
        sqlLog: { appenders: ['sql'], level: 'info' },
        errLog: { appenders: ['err'], level: 'info' },
    }
});
const loggerSql = log4js.getLogger('sqlLog');
const loggerErr = log4js.getLogger('errLog');
//重新写了info方法
function info(message){
    loggerSql.info(message);
}
function errLog(msg){
    loggerErr.info(msg);
}
export {info, errLog};
