const express = require("express")
const {handleUserSignUp, handleUserLogin} = require("../Controller/userController")
const router = express.Router()

router.route("/signup")
.post(handleUserSignUp)
router.route("/login")
.post(handleUserLogin)

module.exports = router