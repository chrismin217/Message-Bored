/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name : {
      type: DataTypes.STRING,
      primaryKey : true,
      allowNull : false,
      validate : {
        notEmpty : true
      },
      beforeValidate : function() {
        
      }
    },//end name
    created_by : {
      type : DataTypes.INTEGER,
      references : {
        model : Topic,
        key : 'id'
      }
    },//end FK
    author_id : {
      type : DataTypes.INTEGER,
      references : {
        model : Message,
        key : 'id'
      }
    }//end FK
  }, {
    tableName : 'users'
  });//end User Model

  User.associate = function(models) {
    User.hasMany(models.topic);
    User.hasMany(models.message);
  };

  return User;
};