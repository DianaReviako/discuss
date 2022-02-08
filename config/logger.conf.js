const layout = {
    type: 'pattern', 
    pattern: '[%d{dd-MM-yyyy hh:mm:ss.SSS}] [%p] %m'
}

const loggerConfig = {
    appenders: {
        stdout: {
            type:'stdout',
            layout: layout
        },
    },
    categories: {
        default: {
            appenders: ['stdout'],
            level: 'info'
        },
    },
};

module.exports = {
    loggerConfig
}