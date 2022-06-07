const Recipe = require('../models/Recipe.model');    

const createRecipe = (request, response) => {
    const { body } = request;
    Recipe.create(body) 
    .then((Recipe) => response.json(Recipe))
    .catch((err) => response.json(err));
}

const showRecipes = (req, res) => {
    Recipe.find()
        .then((allRecipes) => res.json(allRecipes))
        .catch((err) => console.log(err))
}

const deleteRecipe = ( req, res) => {
    Recipe.deleteOne({ _id: req.params.id})
    .then((deletedRecipe) => {
        res.json(deleteRecipe)
    })
    .catch(err => res.json(err));
}

const getOneRecipe = (req, res) => {
    Recipe.findOne({ _id:req.params.id })
    .then((oneRecipe) => res.json(oneRecipe))
    .catch((err) => console.log(err))
}

const updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedRecipe => resp.json(updatedRecipe))
        .catch(err => res.json(err))
}


module.exports = {  
    createRecipe,
    showRecipes,
    deleteRecipe,
    getOneRecipe,
    updateRecipe,
}