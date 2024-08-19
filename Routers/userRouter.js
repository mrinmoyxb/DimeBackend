const express = require("express")
const {handleUserSignUp, handleUserLogin, getAllUsers} = require("../Controller/userController")
const router = express.Router()

router.route("/signup")
.post(handleUserSignUp)
router.route("/login")
.post(handleUserLogin)
router.route("/allusers")
.get(getAllUsers)

module.exports = router