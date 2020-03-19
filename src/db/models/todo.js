'use strict';
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    underscored: true,
  });
  todo.associate = function(models) {
    todo.belongsTo(models.user);
  };
  return todo;
};