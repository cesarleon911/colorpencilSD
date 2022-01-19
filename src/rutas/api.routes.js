const { Router } = require('express');
const router = Router();

const api = require('../controladores/api.controller');


router.get('/api/colores', api.apiColores );
router.get('/api/data',   api.apiData  );

module.exports = router;