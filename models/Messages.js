/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define('message', {
    body : { type: DataTypes.TEXT, unique : true },
  }, {
    tableName : 'messages'
  });

  Message.associate = function(models) {
    Message.belongsTo(models.user);
    Message.belongsTo(models.topic);
  };

  return Message;
};