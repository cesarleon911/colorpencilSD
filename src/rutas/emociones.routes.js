const { Router } = require('express');
const router = Router();

const emo = require('../controladores/emociones.controller');

router.get('/emociones', emo.renderEmoForm );
router.post('/emociones/add', emo.createNewEmo );
router.delete('/emociones/delete/:id', emo.DeleteEmo );




module.exports = router;