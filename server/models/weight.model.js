const mongoose = require('mongoose');

const WeightSchema = new mongoose.Schema({
    amount: Number,
    time: String,
    date: String,
}, 
{ timestamps: true }
);
const Weight = mongoose.model('Weight', WeightSchema);
 
module.exports = Weight;