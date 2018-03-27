import shipments from './api/shipments';
import locations from './api/locations';

export default app => {
    app.express.use('/api/v1', [shipments, locations]);
};
