const { Sequelize } = require('sequelize');

let connection;

function getConnection(databaseUrl, options) {
  if (connection) {
    return connection;
  }
  connection = new Sequelize(databaseUrl, {
    dialect: options.dialect || 'postgres',
    dialectOptions: {
      ssl: (options.ssl !== false),
    },
    logging: false,
  });
  return connection;
}

module.exports = {
  getConnection,
};
