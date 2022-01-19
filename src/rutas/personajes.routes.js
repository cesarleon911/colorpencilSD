const { Router } = require('express');
const router = Router();

const personaje = require('../controladores/personajes.controller');

router.get('/personajes',               personaje.renderPersonajeForm);
router.post('/personajes/add',          personaje.createNewPersonaje );
router.delete('/personajes/delete/:id', personaje.deletePersonaje);


module.exports = router;