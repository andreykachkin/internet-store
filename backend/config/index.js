require('dotenv').config();

const env = process.env.NODE_ENV;

export default {
    port: process.env.PORT,
    host: process.env.SITE_HOST,
    siteURL: process.env.SITE_URL || '',

    isDev: env === 'development',

    database: {
        urn: process.env.DATABASE_URL,
        reset: {},
    },

    session: {
        redis: {
            host: process.env.SESSION_REDIS_HOST || '127.0.0.1',
            port: process.env.SESSION_REDIS_PORT || 6379,
            // socket: Redis server unix_socket
            // url: Redis server url
            ttl: process.env.SESSION_REDIS_TTL || 3600,
            // disableTTL: disables setting TTL, keys will stay in redis until evicted by other means (overides ttl)
            db: parseInt(process.env.SESSION_REDIS_DB || 0), // Database index to use
            // pass: Password for Redis authentication
            prefix: process.env.SESSION_REDIS_PREFIX || 'session:'
        },
        secret: process.env.SESSION_SECRET
    },
}
