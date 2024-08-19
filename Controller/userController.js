const express = require("express")
const User = require("../Model/userModel")

async function handleUserSignUp(req, res){
    try{
        if(!req.body || !req.name || !req.email || !req.password){
            
        }
    }catch(error){

    }
}

async function handleUserLogin(req, res){

}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}