const { Sequelize } = require('sequelize');

module.exports = (connection, Company, Computer, User) => {
  const Sync = connection.define('sync', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    filename: {
      type: Sequelize.STRING,
      validate: {
        max: 511,
      },
      field: 'filename',
    },
    lastSync: {
      type: Sequelize.DATE,
      field: 'last_sync',
    },
    method: {
      type: Sequelize.STRING,
      validate: {
        max: 1,
      },
      field: 'method',
    },
    origin: {
      type: Sequelize.STRING,
      validate: {
        max: 255,
      },
      field: 'origin',
    },
    store: {
      type: Sequelize.STRING,
      validate: {
        max: 4,
      },
      field: 'store',
    },
    string: {
      type: Sequelize.TEXT,
      field: 'string',
    },
    syncType: {
      type: Sequelize.STRING,
      validate: {
        max: 1,
      },
      field: 'sync_type',
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      field: 'created',
    },
    companyId: {
      type: Sequelize.INTEGER,
      references: {
        model: Company,
        key: 'id',
      },
      field: 'company_id',
    },
    computerId: {
      type: Sequelize.INTEGER,
      references: {
        model: Computer,
        key: 'id',
      },
      field: 'computer_id',
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
      field: 'user_id',
    },
  }, {
    tableName: 'core_sync',
    timestamps: false,
  });
  return Sync;
};
