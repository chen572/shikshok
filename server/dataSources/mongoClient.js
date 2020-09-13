const { connect } = require('mongoose')
const Models = require('../models/Models')
connect(process.env.MONGO_URI)

class MongoClient {
  getAllVideos() {
    return Models
      .Video
      .find({})
      .lean()
  }
}

module.exports = MongoClient