const { Router } = require('express');
const router = Router();

const ver = require('../controladores/versiones.controller');


router.get('/versiones',               ver.renderVersionForm );
router.post('/versiones/add',          ver.createNewVer);
router.delete('/versiones/delete/:id', ver.deleteVer);



module.exports = router;