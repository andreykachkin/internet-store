import opts from './api/opts';

export default app => {
    app.express.use('/api/v1', [opts]);
};
