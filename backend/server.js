import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

import session from './app/lib/session';
import appBuilder from './app/lib';
import routes from './app/routes';
import { notFoundHandler, errorVerboseHandler, errorSilentHandler } from './app/lib/errorHandlers';

const internetStore = appBuilder(app);


const { passport, config, logger: { http, main } } = internetStore;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'json' }));
app.use(cookieParser());

app.use(session);

app.use(http);

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

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
    () => main.info(`App listening on ${app.get('host')}:${app.get('port')}`));
