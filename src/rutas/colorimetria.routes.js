const { Router } = require('express');
const router = Router();

const color = require('../controladores/colorimitria.controller');

router.get('/colores',                  color.renderColorForm );
router.post('/colores/add',             color.createNewColor);
router.delete('/colores/delete/:id',    color.DeleteColor);

module.exports = router;