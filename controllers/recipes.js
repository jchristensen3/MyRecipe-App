const recipes = require('../models/recipes');

const index = (req, res) => {
    res.render('index.ejs', {
        recipes: recipes});
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const createRecipes =  (req, res) => {
    recipes.push(req.body);
    res.redirect('/recipes');
}

const show = (req, res) => {
    console.log(req.params.index);
    res.render('show.ejs', {
    recipe: recipes[req.params.index]
})
}

const deleteRecipes = (req, res) => {
    recipes.splice(req.params.index, 1);
    res.redirect('/recipes');
}

const renderEdit = (req, res) => {
    res.render('edit.ejs', {
        recipe: recipes[req.params.index],
        recipeIndex: req.params.index
    })
}

const updateRecipes = (req, res) => {
    recipes[req.params.index] = req.body;
    res.redirect('/recipes');
}

module.exports = {
    index,
    renderNew,
    createRecipes,
    show,
    deleteRecipes,
    renderEdit,
    updateRecipes,
}