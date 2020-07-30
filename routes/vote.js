  
// Rutas para guardar candidato
const express = require('express');
const router = express.Router();
const votesController = require('../controllers/votesController');
// const { check } = require('express-validator');

// Agregar votación
router.post('/',
  votesController.setVote
);

router.post('/batchFamilies',
  votesController.batchFamily
);

router.get('/getFamilies',
  votesController.getFamilies
)

router.delete('/delete/:id',
  votesController.deleteFamily
)

module.exports = router;