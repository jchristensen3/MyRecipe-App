'use strict';
// const {
//   Model
// } = require('sequelize');
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
//   class Recipe extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Recipe.init({
//     name: DataTypes.STRING,
//     time: DataTypes.STRING,
//     img: DataTypes.STRING,
//     ingredients: DataTypes.STRING,
//     directions: DataTypes.STRING,
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Recipe',
//   });
//   return Recipe;
// };