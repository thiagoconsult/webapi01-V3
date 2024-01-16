const express = require('express')
const router = express.Router()
const keysController = require('../controllers/keyController')

router.get('/new', keysController.newKey)

module.exports = router