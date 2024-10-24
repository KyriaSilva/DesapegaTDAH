const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');
const medicoRoutes = require('./routes/medicoRoutes');

const app = express();
app.use(bodyParser.json());

// Montando as rotas com prefixos específicos
app.use('/api/alunos', alunoRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/medicos', medicoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
