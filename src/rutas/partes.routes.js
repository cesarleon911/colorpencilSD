const { Router } = require('express');
const router = Router();

const parte = require('../controladores/partes.controller');

router.get('/partes',               parte.renderPartForm);
router.post('/partes/add',          parte.createNewPart );
router.delete('/partes/delete/:id', parte.DeleteParte);

module.exports = router;