const express = require("express")
const {handleUserSignUp, handleUserLogin, getAllUsers} = require("../Controller/userController")
const {verifyJwtMiddleware} = require("../Middleware/authVerificationMiddleware")
const router = express.Router()

router.route("/signup")
.post(handleUserSignUp)
router.route("/login")
.post(handleUserLogin)

router.get("/allusers", verifyJwtMiddleware, getAllUsers)


module.exports = router