import { Router } from 'express';
import { list, view, create, update, remove } from '../../controllers/locations';

const router = Router();

router.get('/locations',
    list);

router.get('/locations/:id',
    view);

router.post('/locations',
    create);

router.patch('/locations/:id',
    update);

router.delete('/locations/:id',
    remove);

export default router;

