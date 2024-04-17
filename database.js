const Sequelize = require('sequelize');

// Configurações da conexão com o banco de dados
const sequelize = new Sequelize('db_api_node', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

// Testando a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem sucedida com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

module.exports = sequelize;
