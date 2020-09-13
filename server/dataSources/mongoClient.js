const { connect } = require('mongoose')
const Models = require('../models/Models')
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

class MongoClient {
  getAllProducts() {
    return Models
      .Product
      .find({})
      .populate({ path: 'store', options: { lean: true } }, '_id name')
      .lean()
  }

  getStoreById(id) {
    return Models
      .Product
      .find({ store: id })
      .populate({ path: 'store', options: { lean: true } }, '_id name')
      .lean()
  }

  getProductsByCategory(category) {
    return Models
      .Product
      .find({ category })
      .populate({ path: 'store', options: { lean: true } }, 'name')
      .lean()
  }
}

module.exports = MongoClient