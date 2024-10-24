const db = require('../config/db');

const Professor = {
    getAll: (callback) => {
        db.query('SELECT * FROM Professor', callback);
    },
    
    getById: (id, callback) => {
        db.query('SELECT * FROM Professor WHERE ID = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO Professor SET ?', data, callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE Professor SET ? WHERE ID = ?', [data, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM Professor WHERE ID = ?', [id], callback);
    }
};

module.exports = Professor;
