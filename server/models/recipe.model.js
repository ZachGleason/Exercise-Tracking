const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
    type: String,
    maxlength: [50, "Recipe Length is over 50 characters!"],
    },
    calories: {
    type: Number,
    required: [true, "calorie is required"]
    },
    proteins: {
    type: Number,
    required: [true, "Proteins is required!"],
    },
    fats: {
    type: Number,
    required: [true, "Fats is required!"],
    },
    description: {
    type: String, 
    required: [true, "Description is required!"],
    },
}, 
{ timestamps: true }
);


const Recipe = mongoose.model('Recipe', RecipeSchema);
 
module.exports = Recipe;