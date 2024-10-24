const db = require('../config/db');

const Medico = {
    getAll: (callback) => {
        db.query('SELECT * FROM medico', callback);
    },
    
    getById: (id, callback) => {
        db.query('SELECT * FROM medico WHERE ID = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO medico SET ?', data, callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE medico SET ? WHERE ID = ?', [data, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM medico WHERE ID = ?', [id], callback);
    }
};

module.exports = Medico;
