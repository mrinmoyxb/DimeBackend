const mongoose = require("mongoose")

// Schema
const spendSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

// Model
const Spend = mongoose.model("spend", spendSchema)

module.exports = Spend