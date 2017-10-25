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
    },
    created_by : { 
      type : DataTypes.INTEGER,
      references : {
        model : 'users', //references the TABLE NAME
        key : 'id'
      }
    },
  }, {
    tableName : 'topics'
  });

  Topic.associate = function(models) {
    Topic.belongsTo(models.user);
  };

  return Topic;
};