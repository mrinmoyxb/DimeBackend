const express = require("express")
const {handlePostUserSpending, handleGetUserSpending} = require("../Controller/spendController")

const router = express.Router()

router.route("/spend")
.get(handleGetUserSpending)
.post(handlePostUserSpending)


module.exports = router