import shipments from './api/shipments';

export default app => {
    app.express.use('/api/v1', [shipments]);
};
