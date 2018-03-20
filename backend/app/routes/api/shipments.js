import { Router } from 'express';

const router = Router();

router.get('/shipments', (req, res) => {
    const data = [
        {
            id: 1,
            name: 'test1'
        },
        {
            id:2,
            name: 'test2'
        }
    ];
    res.status(200).send(data);
});

export default router;

