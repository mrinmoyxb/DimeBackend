const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true,
    }
}, {timestamp: true})

const User = mongoose.model("user", userModel)

module.exports = User