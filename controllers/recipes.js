const Recipe = require('../models').Recipe

const index = (req, res) => {
    Recipe.findAll().then(allRecipes => {
        res.render('index.ejs', {recipes: allRecipes});
    })
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const createRecipes =  (req, res) => {
    Recipe.create(req.body).then(newRecipe => {
        res.redirect('/recipes');
    }) 
}

const show = (req, res) => {
    Recipe.findByPk(req.params.index) .then(foundRecipe => {
        res.render('show.ejs', {
            recipe: foundRecipe
        }) 
    })
}

const deleteRecipes = (req, res) => {
    Recipe.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/recipes');
    })
}

const renderEdit = (req, res) => {
    Recipe.findByPk(req.params.index)
    .then(foundRecipe => {
        res.render('edit.ejs', {
            recipe: foundRecipe
        })
    })
}

const updateRecipes = (req, res) => {
    Recipe.update(req.body, {
        where: {id:req.params.index},
        returning: true
    })
    .then(updatedRecipe => {
        res.redirect('/recipes');
    })  
}

module.exports = {
    index,
    renderNew,
    createRecipes,
    show,
    deleteRecipes,
    renderEdit,
    updateRecipes
}