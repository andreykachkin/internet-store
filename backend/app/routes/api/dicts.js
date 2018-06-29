import { Router } from 'express';
import { listShipmentContentTypes, listShipmentModes } from '../../controllers/dictionaries';

const router = Router();

router.get('/dictionary/shipment-content-types',
    listShipmentContentTypes);

router.get('/dictionary/shipment-modes',
    listShipmentModes);

export default router;

