import { Router } from 'express';
import { list, view } from '../../controllers/shipments';

const router = Router();

router.get('/shipments',
    list);

router.get('/shipments/:id',
    view);

export default router;

