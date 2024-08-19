const express = require("express")
const Earn = require("../Model/earnModel")

async function handlePostUserEarning(req, res){
    try{
        if(!req.body || !req.body.amount || !req.body.earnType){
            res.status(400).json({"msg": "Provide all data"})
        }
        numOfDocs = Earn.countDocuments()
        const earn = await Earn.create({earnId: numOfDocs+1, amount: req.body.amount, earnType: req.body.earnType, date: Date.now()})
        res.status(200).json({"msg": earn, })
    }catch(error){
        res.status(500).json({"msg": error})
    }
}

async function handleGetUserEarning(req, res){
    try{
        const allTransactions = await Earn.find()
        if(!allTransactions){
            return res.status(400).json({"msg": "Not available"})
        }else{
            return res.status(200).json({"msg": allTransactions})
        }
    }catch(error){
        res.status(500).json({"msg": error})
    }
}

module.exports = {
    handleGetUserEarning,
    handlePostUserEarning
}