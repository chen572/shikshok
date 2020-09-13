const express = require('express')
const media = express.Router()
const dataSources = require('../dataSources/dataSources')

media.get('/videos', async (req, res) => {
  res.send(await dataSources.mongoClient.getAllVideos())
})

module.exports = media