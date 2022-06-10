const mongoose = require('mongoose');

const WeightSchema = new mongoose.Schema({
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
const Weight = mongoose.model('Weight', WeightSchema);
 
module.exports = Weight;