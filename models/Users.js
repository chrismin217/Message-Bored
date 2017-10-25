/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true, 
      validate : {
        isEmpty : false
      }
    },//end name
    created_by : { //hasMany topics
      type : DataTypes.STRING,
      references : {
        model : topic,
        key : created_by
      }
    },//end FK
    author_id : { //hasMany messages
      type : DataTypes.STRING,
      references : {
        model : message,
        key : author_id 
      }
    }//end FK
  }, {
    tableName : 'users'
  });//end User model

  User.associate = function(models) {
    User.hasMany(models.topic);
    User.hasMany(models.message);
  };

  return User;
};