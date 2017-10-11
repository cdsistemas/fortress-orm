const { Sequelize } = require('sequelize');

module.exports = (connection) => {
  const User = connection.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: 'id',
    },
    username: {
      type: Sequelize.STRING,
      validate: {
        max: 30,
      },
      field: 'username',
    },
  }, {
    tableName: 'auth_user',
    timestamps: false,
  });
  return User;
};
