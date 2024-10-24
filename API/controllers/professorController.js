const db = require('../config/db');

// Função para criar um novo professor
exports.createProfessor = (req, res) => {
  const { Nome, CPF, Idade, Email, Disciplina, ComprovacaoEnsinoSuperior, Senha } = req.body;

  const query = 'INSERT INTO professor (Nome, CPF, Idade, Email, Disciplina, ComprovacaoEnsinoSuperior, Senha) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [Nome, CPF, Idade, Email, Disciplina, ComprovacaoEnsinoSuperior, Senha], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, Nome, CPF, Idade, Email, Disciplina, ComprovacaoEnsinoSuperior });
  });
};

// Função para listar todos os professores
exports.getAllProfessores = (req, res) => {
  db.query('SELECT * FROM professor', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Função para obter um professor por ID
exports.getProfessorById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM professor WHERE ID = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Professor não encontrado' });
    }
    res.status(200).json(results[0]);
  });
};

// Função para atualizar um professor por ID
exports.updateProfessorById = (req, res) => {
  const { id } = req.params;
  const { Nome, CPF, Idade, Email, Disciplina, ComprovacaoEnsinoSuperior, Senha } = req.body;

  const query = 'UPDATE professor SET Nome = ?, CPF = ?, Idade = ?, Email = ?, Disciplina = ?, ComprovacaoEnsinoSuperior = ?, Senha = ? WHERE ID = ?';
  db.query(query, [Nome, CPF, Idade, Email, Disciplina, ComprovacaoEnsinoSuperior, Senha, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Professor não encontrado' });
    }
    res.status(200).json({ message: 'Professor atualizado com sucesso' });
  });
};

// Função para deletar um professor por ID
exports.deleteProfessorById = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM professor WHERE ID = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Professor não encontrado' });
    }
    res.status(200).json({ message: 'Professor deletado com sucesso' });
  });
};
