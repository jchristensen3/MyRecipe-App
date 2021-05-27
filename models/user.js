'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        recipeId: DataTypes.INTEGER
      }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Recipe, {
      through: 'UserRecipes',
      foreignKey: 'userId'
    });
  };
  return User;
};
