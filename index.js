const express = require("express")
const https = require("https")
const path = require("path")
const fs = require("fs")
require('dotenv').config()

const app = express()

app.use(express.urlencoded({extended: false}))

app.get("/api/user", (req, res)=>{
    return res.json({"msg": "welcome"})
})

app.post("/api/user", (req, res)=>{
    const body = req.body
    return res.json({"name": body.name, "id": body.id})
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "Certificate", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "Certificate", "cert.pem"))
}, app)

sslServer.listen(8000, ()=>{
    console.log("https server is running in port", 8000)
})
