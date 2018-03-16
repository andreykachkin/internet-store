import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

import session from './app/lib/session';
import appBuilder from './app/lib';
import routes from './app/routes';
import { notFoundHandler, errorVerboseHandler, errorSilentHandler } from './app/lib/errorHandlers';

const internetStore = appBuilder(app);


const { passport, config, logger } = internetStore;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'json' }));
app.use(cookieParser());

app.use(session);

// app.use(passport.initialize());
// app.use(passport.session());

routes(internetStore);

// error handlers

// catch 404
app.use(notFoundHandler);

// development error handler, will print stacktrace
if (config.isDev) {
    app.use(errorVerboseHandler);
} else {
// production error handler, no stacktrace leaked to user
    app.use(errorSilentHandler);
}

app.set('port', config.port);
app.set('host', config.host);

app.listen(config.port, config.host,
    () => logger.info(`App listening on ${app.get('host')}:${app.get('port')}`));
