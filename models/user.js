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


//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       User.belongsToMany(models.Recipe, { foreignKey: 'recipeId'})
//     }
//   };
//   User.init({
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     recipeId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };