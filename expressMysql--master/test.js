const log4js = require('log4js');
/**
 * appenders的简单说明，详情请参考官方文档
 * stdout,out,err 都是自定义参数名
 * type : 'dateFile' 记录日志文件的类型，一定要注意 大小写敏感，不然在linux系统将会报错
 * pattern : 日志文件名的格式
 *
 * categories 作为getLogger方法的键名对你应
 */
log4js.configure({
    appenders: {
        stdout: { type: 'stdout' }, //声明此属性可在控制台上打印信息
        sqlLog: { type: 'dateFile', filename: './logs/sqlLog' , pattern: 'yyyyMMdd-err.log', "alwaysIncludePattern": true}
        errLog: { type: 'dateFile', filename: './logs/errLog' , pattern: 'yyyyMMdd-err.log', "alwaysIncludePattern": true}
    },
    categories: {
        default: { appenders: ['stdout','sqlLog'], level: 'info' },
        sqlLog: { appenders: ['stdout','sqlLog'], level: 'info' },
    }
});

let logger_out = log4js.getLogger('sqlLog'); // 这个app参数值先会在categories中找，找不到就会默认使用default对应的appenders,信息会输出到yyyyMMdd-out.log
logger_out.info('this is a app out !!');
