const express = require("express")
const bcrypt = require("bcrypt")
const User = require("../Model/userModel")

//* signup
async function handleUserSignUp(req, res){
    console.log("t1")
    try{
        if(!req.body || !req.body.name || !req.body.email || !req.body.password){
            console.log(req.body.name, req.body.email, req.body.password)
            return res.status(400).json({msg: "Enter all details"})
        }
        else{
            const existingUserEmail = await User.findOne({email: req.body.email})
            if(!existingUserEmail){
                const hashPassword = await bcrypt.hash(req.body.password, 10)
                const user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPassword,
                    balance: 0
                })
                return res.status(200).json({msg: user})
            }else{
                return res.status(400).json({msg:"user already exist"})
            }

        }
    }catch(error){
        return res.status(500).json({msg:"internal server error"})
    }
}

//* login
async function handleUserLogin(req, res){
    try{
        if(!req.body || !req.body.email || !req.body.password){
            return res.status(400).json({msg: "Enter all details"})
        }
        else{
            const existingUser = await User.findOne({email: req.body.email})
            if(existingUser){
                const hashPasword = await bcrypt.compare(req.body.password, existingUser.password)
                if(hashPasword){
                    return res.status(200).json({msg:"Welcome"})
                }
                else{
                    return res.status(400).json({msg:"Wrong Password"})
                }
            }else{
                return res.status(400).json({msg:"Email doesn't exist"})
            }
        }
    }catch(error){
        return res.status(500).json({msg:"internal server error"})
    }
}


//! PRIVATE
async function getAllUsers(){
    try{
        const allUsers = await User.find()
        return res.status(200).json({msg: allUsers})
    }catch(error){
        return res.status(500).json({msg:"internal server error"})
    }
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
    getAllUsers
}