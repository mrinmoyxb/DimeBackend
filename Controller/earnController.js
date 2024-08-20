const express = require("express")
const Transaction = require("../Model/transactionModel")

// POST: save earnings of user
async function handlePostUserEarning(req, res){
    try{
        if(!req.body || !req.body.amount || !req.body.category){
            res.status(400).json({"response": "Provide all data"})
        }
        countDoc = await Transaction.countDocuments()
        const earn = await Transaction.create(
            {
            transactionId: countDoc+1,
            transactionType: "Earn",
            amount: req.body.amount,
            category: req.body.category,
            date: Date.now()
            })
        res.status(200).json({"response": earn})
    }catch(error){
        res.status(500).json({"response": "Internal server error"})
    }
}

// GET: get all earnings of user
async function handleGetUserEarning(req, res){
    try{
        const allTransactions = await Transaction.find({transactionType: "Earn"})
        if(!allTransactions){
            return res.status(400).json({"response": "Not available"})
        }else{
            return res.status(200).json({"response": allTransactions})
        }
    }catch(error){
        res.status(500).json({"response": "Internal server error"})
    }
}

// GET: get transaction by a specific category
async function handleGetUserEarningByCategory(req, res){
    try{
        const categorySelected = req.params.category
        const transactionByCategory = await Transaction.find({category: categorySelected})
        if(!transactionByCategory){
            return res.status(400).json({"response":"No data available"})
        }
        else{
            return res.status(200).json({"response": transactionByCategory})
        }
    }catch(error){
        res.status(500).json({"response": "Internal server error"})
    }
}


module.exports = {
    handleGetUserEarning,
    handlePostUserEarning,
    handleGetUserEarningByCategory
}