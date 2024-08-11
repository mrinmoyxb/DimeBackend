const express = require("express")
const https = require("https")
const path = require("path")
const fs = require("fs")
const {connectMongoDB} = require("./connection")

// Routers
const spendRouter = require("./Routers/spendRouter")

require('dotenv').config()
const app = express()

//MongoDB
connectMongoDB()
.then(()=>{console.log("MongoDB connected successfully")})
.catch(()=>{console.log("MongoDB connection failed")})

app.use(express.urlencoded({extended: false}))
app.use("/api", spendRouter)
//app.use("/api")

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, "Certificate", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "Certificate", "cert.pem"))
}, app)

sslServer.listen(process.env.PORT, ()=>{
    console.log("https server is running in port", process.env.PORT)
})
