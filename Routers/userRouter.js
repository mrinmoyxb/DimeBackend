const express = require("express")
const {handleUserSignUp, handleUserLogin} = require("../Controller/userController")
const router = Router()

router.route("/signUp")
.post(handleUserSignUp)
router.router("/login")
.post(handleUserLogin)

module.exports = router