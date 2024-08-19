const express = require("express")
const Spend = require("../Model/spendModel")

async function handlePostUserSpending(req, res){
    try{
        if(!req.body || !req.body.amount || !req.body.spendType){
            res.status(400).json({"errorMessage": "Provide all data"})
        }
        const numOfDocs = await Spend.countDocuments()
        const spend = await Spend.create({spendId: numOfDocs+1, amount: req.body.amount, spendType: req.body.spendType, date: Date.now()})
        res.status(200).json({"msg": spend})
    }catch(error){
        res.status(500).json({"msg": error})
    }
}

async function handleGetUserSpending(req, res){
    try{
        const allTransactions = await Spend.find()
        if(!allTransactions){
            return res.status(400).json({"msg": "Not available"})
        }else{
            return res.status(200).json({"msg": allTransactions})
        }
    }catch(error){
        res.status(500).json({"errorMessage": error})
    }
}

module.exports = {
    handleGetUserSpending,
    handlePostUserSpending
}