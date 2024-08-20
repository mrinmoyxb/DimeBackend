const mongoose = require("mongoose")

const transactionModel = mongoose.Schema({
    transactionId: {
        type: Number,
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const Transaction = mongoose.model("transaction", transactionModel)

module.exports = Transaction