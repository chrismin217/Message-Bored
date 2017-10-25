/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define('message', {
    body : {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        isEmpty : false
      }
    },//end body
    topic_id : { //belongsTo Topic
      type : DataTypes.INTEGER,
      references : {
        model : Topic,
        key : id
      }
    },//end FK
    author_id : { //belongsTo User
      type : DataTypes.INTEGER,
      references : {
        model : User,
        key : id
      }
    }//end FK
  }, {
    tableName : 'messages'
  });//end Message model

  Message.associate = function(models) {
    Message.belongsTo(models.user);
    Message.belongsTo(models.topic);
  };

  return Message;
};