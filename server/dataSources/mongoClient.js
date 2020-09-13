const { connect } = require('mongoose')
const Models = require('../models/Models')
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

class MongoClient {
  getAllVideos() {
    return Models
      .Video
      .find({})
      .lean()
  }
}

module.exports = MongoClient