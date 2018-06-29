import shipments from './api/shipments';
import locations from './api/locations';
import dicts from './api/dicts';

export default app => {
    app.express.use('/api/v1', [shipments, locations, dicts]);
};
