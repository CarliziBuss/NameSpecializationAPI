# NameSpecializationAPI

A API "NameSpecializationAPI" é uma aplicação backend desenvolvida em Node.js que lida com duas entidades principais: "Name" e "Specialization". 
Essa API permite a criação, leitura, atualização e exclusão (CRUD) de registros dessas entidades em um banco de dados SQL utilizando o ORM Sequelize.

A estrutura da API consiste em endpoints para lidar com as operações CRUD para ambas as entidades:

-/api/names
POST: Cria um novo nome.

-/api/specializations'
POST: Cria uma nova especialização.

Além disso, a API fornece endpoints para outras operações CRUD, como leitura, atualização e exclusão de registros.



Tecnologias Utilizadas:

Node.js  |  Express.js  |  Sequelize  |  MySQL   |  Body-parser

- Node.js: Ambiente de execução JavaScript para servidor.
- Express.js: Framework web para Node.js utilizado na definição de rotas e middleware.
- Sequelize: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados SQL.
- MySQL: Banco de dados relacional utilizado para armazenar os dados das entidades.
- Body-parser: Middleware para Express.js usado para analisar o corpo das solicitações HTTP.

Para executar a API em seu ambiente local, siga estas etapas:
1. Clone o repositório do projeto.
2. Instale as dependências utilizando o 'npm install'.
3. Configure um banco de dados MySQL e atualize as credenciais no arquivo 'database.js' na pasta 'config'.
4. Execute o comando 'node index.js' para iniciar o servidor. Certifique-se de ter o Node.js e o MySQL instalados em seu sistema antes de prosseguir com a configuração.
