module.exports = {
    apps : [
        {
            name: 'mora api',
            script : './bin/server.js',
            cwd: "./",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
            out_file: "./logs/pm2-out.log",
            error_file: "./logs/pm2-err.log",
            watch: true,
            ignore_watch: [ // 不用监听的文件
                "node_modules",
                "logs"
            ],
            exec_mode: "fork",
            env: {
                NODE_ENV: 'production' //启动默认模式
            }
        },
    ]
};