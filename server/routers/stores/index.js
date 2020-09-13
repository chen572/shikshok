const express = require('express')

const router = express.Router()

const getById = require('./get-by-id')

router.post('/by-id', [], getById)

module.exports = router