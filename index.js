const express = require("express")
const https = require("https")
const path = require("path")
const fs = require("fs")
const {connectMongoDB} = require("./connection")

// Routers
const spendRouter = require("./Routers/spendRouter")
const earnRouter = require("./Routers/earnRouter")
const userRouter = require("./Routers/userRouter")

require('dotenv').config()
const app = express()

//MongoDB
connectMongoDB()
.then(()=>{console.log("MongoDB connected successfully")})
.catch(()=>{console.log("MongoDB connection failed")})

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use("/api", userRouter)
app.use("/api/spend", spendRouter)
app.use("/api/earn", earnRouter)

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on PORT: ", process.env.PORT)
})