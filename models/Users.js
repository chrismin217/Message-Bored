/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    password : DataTypes.STRING
  }, {
    tableName : 'users'
  });

  User.associate = function(models) {

  };

  return User;
};