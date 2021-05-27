'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
    {
      name: "Julia Christensen",
      username: "Jchristensen3",
      password: "hello3",
      recipeId: 1
  },
  {
      name: "Chad Christensen",
      username: "Chad5",
      password: "Omaha5!",
      recipeId: 2
  },
  {
      name: "Kayli Chirstensen",
      username: "KPC333",
      password: "Princess!",
      recipeId: 3
  }
])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
