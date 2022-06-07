const RecipeController = require('../controller/recipe.controller');  

module.exports = (app) => {
    app.post('/api/recipe', RecipeController.createRecipe);
    app.get('/api/allrecipes', RecipeController.showRecipes);
    app.delete('/api/delete/:id', RecipeController.deleteRecipe);
    app.get('/api/recipe/:id', RecipeController.getOneRecipe);
    app.put('/api/recipe/:id', RecipeController.updateRecipe);
}