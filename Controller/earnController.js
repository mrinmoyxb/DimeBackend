const express = require("express")
const Earn = require("../Model/earnModel")

async function handlePostUserEarning(req, res){
    try{
        if(!req.body || !req.body.amount || !req.body.earnType){
            res.status(400).json({"errorMessage": "Provide all data"})
        }
        const earn = await Earn.create({amount: req.body.amount, earnType: req.body.earnType, date: Date.now()})
        res.status(200).json({"successMessage": "Inserted successfully", "data": earn})
    }catch(error){
        res.status(500).json({"errorMessage": error})
    }
}

async function handleGetUserEarning(){
    try{
        const allTransactions = await Earn.find()
        if(!allTransactions){
            return res.status(400).json({"errorMessage": "Not available"})
        }else{
            return res.status(200).json({"allTransactions": allTransactions})
        }
    }catch(error){
        res.status(500).json({"errorMessage": error})
    }
}

module.exports = {
    handleGetUserEarning,
    handlePostUserEarning
}