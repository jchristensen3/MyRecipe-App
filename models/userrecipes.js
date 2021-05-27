'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRecipes extends Model {
 
    static associate(models) {
    }
  };
  UserRecipes.init({
    userId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRecipes',
  });
  return UserRecipes;
};