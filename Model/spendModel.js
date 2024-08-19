const mongoose = require("mongoose")

// Schema
const spendSchema = new mongoose.Schema({
    spendId: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    spendType: {
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