const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

// Rota para criar um novo aluno
router.post('/', alunoController.createAluno);

// Rota para listar todos os alunos
router.get('/', alunoController.getAllAlunos);

// Rota para obter um aluno por ID
router.get('/:id', alunoController.getAlunoById);

// Rota para atualizar um aluno por ID
router.put('/:id', alunoController.updateAlunoById);

// Rota para deletar um aluno por ID
router.delete('/:id', alunoController.deleteAlunoById);

module.exports = router;
