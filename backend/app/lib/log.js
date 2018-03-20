const bunyan = require('bunyan');
const bunyanExpress = require('express-bunyan-logger');

const buildLogger = name => bunyan.createLogger({ name });

const httpLogger = bunyanExpress({
    name: 'http-req',
    excludes: 'req-headers http-version res-headers req[headers] referer req res'.split(/\s+/),
    parseUA: false,
});

export default {
    http: httpLogger,
    db: buildLogger('db'),
    main: buildLogger({ level: 'debug', name: 'internet_store' }),
    buildLogger,
};
