const { Sequelize } = require('sequelize');

module.exports = (connection) => {
  const Company = connection.define('company', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: 'id',
    },
    code: {
      type: Sequelize.INTEGER,
      field: 'code',
    },
    name: {
      type: Sequelize.STRING,
      validate: {
        max: 254,
      },
      field: 'name',
    },
  }, {
    tableName: 'core_company',
    timestamps: false,
  });
  return Company;
};

