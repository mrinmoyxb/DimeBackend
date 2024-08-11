const express = require("express")
const Spend = require("../Model/spendModel")

async function handlePostUserSpending(req, res){
    try{
        if(!req.body || !req.body.amount || !req.body.paymentType){
            res.status(400).json({"errorMessage": "Provide all data"})
        }
        const spend = await Spend.create({amount: req.body.amount, paymentType: req.body.paymentType, date: Date.now()})
        res.status(200).json({"successMessage": "Inserted successfully", "data": spend})
    }catch(error){
        res.status(500).json({"errorMessage": error})
    }
}

async function handleGetUserSpending(req, res){
    try{
        const allTransactions = await Spend.find()
        if(!allTransactions){
            return res.status(400).json({"errorMessage": "Not available"})
        }else{
            return res.status(200).json({"allTransaction": allTransactions})
        }
    }catch(error){
        res.status(500).json({"errorMessage": error})
    }
}

module.exports = {
    handleGetUserSpending,
    handlePostUserSpending
}