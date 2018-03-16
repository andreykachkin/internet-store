import session from 'express-session';
import ConnectRedis from 'connect-redis';
import config from '../../config';

const RedisStore = ConnectRedis(session);

export default session({
    store: new RedisStore(config.session.redis),
    secret: config.session.secret,
    saveUninitialized: true,
    resave: true,
    name: 'connection',
    cookie: { httpOnly: true },
});
