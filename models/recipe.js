'use strict';

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
        name: DataTypes.STRING,
        time: DataTypes.STRING,
        img: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        directions: DataTypes.STRING,
        userId: DataTypes.INTEGER
      }, {});
      Recipe.associate = function(models) {
        Recipe.belongsToMany(models.User, {
          through: 'UserRecipes',
          foreignKey: 'userId',
        });
      };
      return Recipe;
};
;