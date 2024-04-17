const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', routes);

// Sincronizando os modelos com o banco de dados e iniciando o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
