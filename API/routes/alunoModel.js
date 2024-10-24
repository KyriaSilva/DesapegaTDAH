const db = require('../config/db');

const Aluno = {
    getAll: (callback) => {
        db.query('SELECT * FROM Aluno', callback);
    },
    
    getById: (id, callback) => {
        db.query('SELECT * FROM Aluno WHERE ID = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO Aluno SET ?', data, callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE Aluno SET ? WHERE ID = ?', [data, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM Aluno WHERE ID = ?', [id], callback);
    }
};

module.exports = Aluno;
