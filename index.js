/* eslint global-require: 0 */

const { getConnection } = require('./src/db');

let connection;

function initialize(databaseUrl, options) {
  connection = getConnection(databaseUrl, options);
  const User = require('./src/models/User')(connection);
  const Company = require('./src/models/Company')(connection);
  const Computer = require('./src/models/Computer')(connection, Company);
  const Sync = require('./src/models/Sync')(connection, Company, Computer, User);
  const SyncControl = require('./src/models/SyncControl')(connection, Computer, Sync);

  return {
    User,
    Company,
    Computer,
    Sync,
    SyncControl,
  };
}

function createDB() {
  return new Promise((resolve) => {
    connection.sync({ force: true }).then(() => resolve());
  });
}

module.exports = {
  initialize,
  connection,
  createDB,
};
