'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Recipes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    },
    ingredients: {
      type: Sequelize.STRING
    },
    directions: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Recipes');
}