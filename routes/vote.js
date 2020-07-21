  
// Rutas para guardar candidato
const express = require('express');
const router = express.Router();
const votesController = require('../controllers/votesController');
// const { check } = require('express-validator');

// Agregar votación
router.post('/',
  votesController.setVote
);

module.exports = router;