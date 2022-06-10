const mongoose = require('mongoose');

const WaterSchema = new mongoose.Schema({
    amount: {
    Number,
    required: [true, "Amount is required!"],
    },
    time: {
    String,
    required: [true, "Time is required!"],
    },
    date: {
    String,
    required: [true, "Date is required!"],
    },
}, 
{ timestamps: true }
);
const Water = mongoose.model('Water', WaterSchema);
 
module.exports = Water;