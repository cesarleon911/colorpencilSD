const { Router } = require('express');
const router = Router();

const acc = require('../controladores/accesorios.controller');


router.get('/accesorios', acc.renderACCForm );
router.post('/accesorios/add', acc.createNewAcc);
router.delete('/accesorios/delete/:id', acc.DeleteAcc );

module.exports = router;