const express = require('express')

const router = express.Router()

const getById = require('./get-by-id')
const create = require('./create')

router.post('/by-id', [], getById)
router.post('/create', [], create)

module.exports = router