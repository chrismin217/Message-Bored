/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const Topic = sequelize.define('topic', {
    name : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        isEmpty : false
      }
    },//end name
    created_by : { //belongs to User 
      type : DataTypes.INTEGER, //userID PK
      references : {
        model : user,
        key : id
      }
    },//end FK
    topic_id : { //hasMany messages
      type : DataTypes.INTEGER,
      references : {
        model : message, 
        key : id
      }
    }//end FK
  }, {
    tableName : 'topics'
  });//end Topic model

  Topic.associate = function(models) {
    Topic.belongsTo(models.user);
    Topic.hasMany(models.message);
  };

  return Topic;
};