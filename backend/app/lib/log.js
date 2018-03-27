const bunyan = require('bunyan');
const bunyanExpress = require('express-bunyan-logger');

const buildLogger = name => bunyan.createLogger({ name });

const httpLogger = bunyanExpress({
    name: 'http-req',
    excludes: 'req-headers http-version res-headers req[headers] referer req res'.split(/\s+/),
    parseUA: false,
});

const mainLogger =  bunyan.createLogger({ level: 'debug', name: 'internet_store' });

export default {
    http: httpLogger,
    db: mainLogger.child({sc: 'db'}),
    main: mainLogger,
    buildLogger,
};
