const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

// Rota para criar um novo professor
router.post('/', professorController.createProfessor);

// Rota para listar todos os professores
router.get('/', professorController.getAllProfessores);

// Rota para obter um professor por ID
router.get('/:id', professorController.getProfessorById);

// Rota para atualizar um professor por ID
router.put('/:id', professorController.updateProfessorById);

// Rota para deletar um professor por ID
router.delete('/:id', professorController.deleteProfessorById);

module.exports = router;
