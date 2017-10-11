const { Sequelize } = require('sequelize');

module.exports = (connection, Computer, Sync) => {
  const SyncControl = connection.define('sync_control', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    downloaded: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      field: 'downloaded',
    },
    syncId: {
      type: Sequelize.INTEGER,
      references: {
        model: Sync,
        key: 'id',
      },
      field: 'sync_id',
    },
    computerId: {
      type: Sequelize.INTEGER,
      references: {
        model: Computer,
        key: 'id',
      },
      field: 'computer_id',
    },
  }, {
    tableName: 'core_synccontrol',
    timestamps: false,
  });
  return SyncControl;
};
