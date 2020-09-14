const express = require('express')

const router = express.Router()

const update = require('./update')
const getAll = require('./get-all')
const getByCategory = require('./get-by-category')
const create = require('./create')

router.put('/update', [], update)
router.post('/by-category', [], getByCategory)
router.get('/all', [], getAll)
router.post('/create', [], create)

module.exports = router