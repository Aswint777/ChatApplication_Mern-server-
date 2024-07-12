const express = require('express')
const { landingPage } = require('../Controller/chatController')

const router = express.Router()

router.get('/',landingPage)

module.exports = router