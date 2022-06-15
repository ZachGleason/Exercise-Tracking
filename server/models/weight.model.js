const mongoose = require('mongoose');

const WeightSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, "Amount is required!"],
        },
        time: {
        type: String,
        required: [true, "Time is required!"],
        },
        date: {
        type: String,
        required: [true, "Date is required!"],
        },
}, 
{ timestamps: true }
);
const Weight = mongoose.model('Weight', WeightSchema);
 
module.exports = Weight;