'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [
    {
      name: "Cobb Egg Salad", 

      time: "Prep time: 20 Minutes",
    
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190328-cobb-egg-salad-224-1554926334.jpg?crop=1xw:1xh;center,top&resize=980:*",
    
      ingredients: "3 tbsp. mayonnaise,  3 tbsp. Greek yogurt,  2 tbsp. red wine vinegar,   Kosher salt,   Freshly ground black pepper,   8 hard-boiled eggs cut into eight pieces, plus more for garnish,   8 strips bacon, cooked and crumbled, plus more for garnish,    1 avocado, thinly sliced,    1/2 c. crumbled blue cheese, plus more for garnish,   1/2 c. cherry tomatoes, halved, plus more for garnish,   2 tbsp. freshly chopped chives",
   
      directions: "1. In a small bowl, stir together mayonnaise, yogurt, and red wine vinegar. Season with salt and pepper.    2. In a large serving bowl, gently mix together eggs, bacon, avocado, blue cheese, and cherry tomatoes. Gradually fold in mayonnaise dressing, using only enough until ingredients are lightly coated, then season with salt and pepper. Garnish with chives and additional toppings.",
    
      userId: 1
  }
], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};
