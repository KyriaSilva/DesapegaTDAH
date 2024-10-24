const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

// Rota para criar um novo médico
router.post('/', medicoController.createMedico);

// Rota para listar todos os médicos
router.get('/', medicoController.getAllMedicos);

// Rota para obter um médico por ID
router.get('/:id', medicoController.getMedicoById);

// Rota para atualizar um médico por ID
router.put('/:id', medicoController.updateMedicoById);

// Rota para deletar um médico por ID
router.delete('/:id', medicoController.deleteMedicoById);

module.exports = router;
