const notFoundHandler = (req, res, next) => {
    res.status(404)
        .format({
            text: () => res.send('Not found'),
            html: () => res.send('Not found'),
            json: () => res.json({
                status: 404,
                error: 'Not found',
            }),
        });
};

const errorVerboseHandler = (err, req, res, next) => {
    req.log.error(err, 'Unhandled error');
    res.status(err.status || 500).json({
        msg: err.message,
        error: err,
    });
};

const errorSilentHandler = (err, req, res, next) => {
    req.log.error(err, 'Unhandled error');
    res.status(err.status || 500).json({
        msg: err.message,
        error: {},
    });
};

export { notFoundHandler, errorVerboseHandler, errorSilentHandler };
