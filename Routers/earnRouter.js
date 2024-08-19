const express = require("express")
const {handleGetUserEarning, handlePostUserEarning} = require("../Controller/earnController")

const router = express.Router()

router.route("/")
.get(handleGetUserEarning)
.post(handlePostUserEarning)

module.exports = router