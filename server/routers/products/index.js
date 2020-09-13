const express = require('express')

const router = express.Router()

const update = require('./update')
const getAll = require('./get-all')
const getByCategory = require('./get-by-category')

router.post('/update', [], update)
router.post('/by-category', [], getByCategory)
router.get('/all', [], getAll)

module.exports = router