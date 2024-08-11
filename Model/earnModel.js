const mongoose = require("mongoose")

// Schema
const earnSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    earnType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

// Model
const Earn = mongoose.model("earn", earnSchema)

module.exports = Earn
