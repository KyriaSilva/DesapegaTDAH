const db = require('../config/db');

// Função para criar um novo médico
exports.createMedico = (req, res) => {
  const { Nome, Idade, CRM, ComprovacaoEnsinoSuperior, CPF, Email, Senha } = req.body;

  const query = 'INSERT INTO medico (Nome, Idade, CRM, ComprovacaoEnsinoSuperior, CPF, Email, Senha) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [Nome, Idade, CRM, ComprovacaoEnsinoSuperior, CPF, Email, Senha], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, Nome, Idade, CRM, ComprovacaoEnsinoSuperior, CPF, Email });
  });
};

// Função para listar todos os médicos
exports.getAllMedicos = (req, res) => {
  db.query('SELECT * FROM medico', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Função para obter um médico por ID
exports.getMedicoById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM medico WHERE ID = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Médico não encontrado' });
    }
    res.status(200).json(results[0]);
  });
};

// Função para atualizar um médico por ID
exports.updateMedicoById = (req, res) => {
  const { id } = req.params;
  const { Nome, Idade, CRM, ComprovacaoEnsinoSuperior, CPF, Email, Senha } = req.body;

  const query = 'UPDATE medico SET Nome = ?, Idade = ?, CRM = ?, ComprovacaoEnsinoSuperior = ?, CPF = ?, Email = ?, Senha = ? WHERE ID = ?';
  db.query(query, [Nome, Idade, CRM, ComprovacaoEnsinoSuperior, CPF, Email, Senha, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Médico não encontrado' });
    }
    res.status(200).json({ message: 'Médico atualizado com sucesso' });
  });
};

// Função para deletar um médico por ID
exports.deleteMedicoById = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM medico WHERE ID = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Médico não encontrado' });
    }
    res.status(200).json({ message: 'Médico deletado com sucesso' });
  });
};
