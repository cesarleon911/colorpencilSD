const { Router } = require('express');
const router = Router();

const user = require('../controladores/usuarios.controller');

router.get('/',                     user.renderUserForm );
router.get('/usuario',               user.renderUserForm);
router.post('/usuario/add',          user.createNewUser);
router.delete('/usuario/delete/:id', user.deleteUser);


module.exports = router;