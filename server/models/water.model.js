const mongoose = require('mongoose');

const WaterSchema = new mongoose.Schema({
    amount: Number,
    time: String,
    date: String,
}, 
{ timestamps: true }
);
const Water = mongoose.model('Water', WaterSchema);
 
module.exports = Water;