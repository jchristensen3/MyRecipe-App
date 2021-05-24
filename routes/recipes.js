const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.recipes.index);
router.get('/new', ctrl.recipes.renderNew);
router.post('/', ctrl.recipes.createRecipes);
router.get('/:index', ctrl.recipes.show);
router.delete('/:index', ctrl.recipes.deleteRecipes);

router.get('/:index/edit', ctrl.recipes.renderEdit);
router.put('/:index', ctrl.recipes.updateRecipes);
module.exports = router;