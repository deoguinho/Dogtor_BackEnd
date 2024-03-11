const express = require('express');
const router = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const PetController = require('./controllers/PetController');


router.get('/usuarios', UsuarioController.buscarTodos);
router.get('/usuario/:id', UsuarioController.buscarUm);
router.post('/usuario', UsuarioController.createUsuario);
router.get('/login', UsuarioController.login);
router.post('/pet', PetController.createAPet);


module.exports = router;