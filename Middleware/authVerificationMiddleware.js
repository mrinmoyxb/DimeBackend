const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyJwtMiddleware = (req, res, next) =>{
    const authHeader = req.headers["authorization"]
    if(!authHeader){
        return res.status(400).json({msg: "no authorization header"})
    }
    console.log("\nheader: ", authHeader)
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.REFRESH_TOKEN, (err, decoded)=>{
        if(err){
            return res.status(403).json({msg:"invalid token"})
        }else{
            req.name = decoded.name
            next()
        }
    })
}

module.exports = {
    verifyJwtMiddleware
}