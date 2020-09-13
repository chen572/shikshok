const express = require('express')
const router = express.Router()

const product = require('./products')
const store = require('./stores')

router.use('/products', product)
router.use('/stores', store)

module.exports = router
