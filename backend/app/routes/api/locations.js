import { Router } from 'express';
import { list, view, remove } from '../../controllers/locations';

const router = Router();

router.get('/locations',
    list);

router.get('/locations/:id',
    view);

router.delete('/locations/:id',
    remove);

export default router;

