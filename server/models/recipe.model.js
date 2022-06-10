const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
    String,
    maxlength: [50, "Recipe Length is over 50 characters!"],
    },
    calories: {
    Number,
    required: [true, "Calories is required!"],
    },
    proteins: {
    Number,
    required: [true, "Proteins is required!"],
    },
    fats: {
    Number,
    required: [true, "Fats is required!"],
    },
    description: {
    String, 
    required: [true, "Description is required!"],
    },
}, 
{ timestamps: true }
);


const Recipe = mongoose.model('Recipe', RecipeSchema);
 
module.exports = Recipe;