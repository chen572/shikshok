const express = require('express')
const storeRouter = express.Router()
const dataSources = require('../dataSources/dataSources')

storeRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  res.send(await dataSources.mongoClient.getStoreById(id))
})

module.exports = storeRouter