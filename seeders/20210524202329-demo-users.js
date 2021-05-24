'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
    {
      name: "Julia Christensen",
      username: "Jchristensen3",
      password: "hello3",
  
  },
  {
      name: "Chad Christensen",
      username: "Chad5",
      password: "Omaha5!",
  },
  {
      name: "Kayli Chirstensen",
      username: "KPC333",
      password: "Princess!",
  }
])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
