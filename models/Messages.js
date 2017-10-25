/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define('message', {
    body : {
      type : DataTypes.TEXT,
      allowNull : false,
      validate : {
        isEmpty : false
      }
    },
    topic_id : {
      type : DataTypes.INTEGER,
      references : {
        model : 'topics', //references the TABLE NAME
        key : 'id'
      }
    },
    author_id : {
      type : DataTypes.INTEGER,
      references : {
        model : 'users', //references the TABLE NAME
        key : 'id'
      }
    }
  }, {
    tableName : 'messages'
  });//end Message model

  Message.associate = function(models) {
    Message.belongsTo(models.user);
    Message.belongsTo(models.topic);
  };

  return Message;
};