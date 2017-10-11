const { Sequelize } = require('sequelize');

module.exports = (connection, Company) => {
  const Computer = connection.define('computer', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'name',
    },
    method: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'method',
    },
    store: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'store',
    },
    companyId: {
      type: Sequelize.INTEGER,
      references: {
        model: Company,
        key: 'id',
      },
      field: 'company_id',
    },
    lastSync: {
      type: Sequelize.DATE,
      field: 'last_sync',
      defaultValue: Sequelize.NOW,
    },
  }, {
    tableName: 'core_computer',
    timestamps: false,
  });
  return Computer;
};
