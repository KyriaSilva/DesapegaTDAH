const db = require('../config/db'); // Supondo que você tenha um módulo para configurar o banco de dados

// Função para criar um aluno
exports.createAluno = (req, res) => {
  const { Nome, NomeResponsavel, TelefoneResponsavel, Email, Senha } = req.body;

  const query = 'INSERT INTO aluno (Nome, NomeResponsavel, TelefoneResponsavel, Email, Senha) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [Nome, NomeResponsavel, TelefoneResponsavel, Email, Senha], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, Nome, NomeResponsavel, TelefoneResponsavel, Email });
  });
};

// Função para listar todos os alunos
exports.getAllAlunos = (req, res) => {
  db.query('SELECT * FROM aluno', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Função para obter um aluno por ID
exports.getAlunoById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM aluno WHERE ID = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(results[0]);
  });
};

// Função para atualizar um aluno por ID
exports.updateAlunoById = (req, res) => {
  const { id } = req.params;
  const { Nome, NomeResponsavel, TelefoneResponsavel, Email, Senha } = req.body;

  const query = 'UPDATE aluno SET Nome = ?, NomeResponsavel = ?, TelefoneResponsavel = ?, Email = ?, Senha = ? WHERE ID = ?';
  db.query(query, [Nome, NomeResponsavel, TelefoneResponsavel, Email, Senha, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json({ message: 'Aluno atualizado com sucesso' });
  });
};

// Função para deletar um aluno por ID
exports.deleteAlunoById = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM aluno WHERE ID = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json({ message: 'Aluno deletado com sucesso' });
  });
};
