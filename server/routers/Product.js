const express = require('express')
const productRouter = express.Router()
const dataSources = require('../dataSources/dataSources')

productRouter.get('/:category', async (req, res) => {
  const { category } = req.params
  res.send(
    category === 'all'
      ? await dataSources.mongoClient.getAllProducts()
      : await dataSources.mongoClient.getProductsByCategory(category)
  )
})

module.exports = productRouter