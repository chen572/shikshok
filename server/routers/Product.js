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

productRouter.put('/:prop', async (req, res) => {
  const { prop } = req.params
  const { id } = req.body
  res.send(await dataSources.mongoClient.incrementProductPropById(prop, id))
})

module.exports = productRouter