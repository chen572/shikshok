const { connect } = require('mongoose')
const Models = require('../models/Models')
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

class MongoClient {
  getAllProducts() {
    return Models
      .Product
      .find({})
      .lean()
      .populate({ path: 'store', options: { lean: true } }, '_id name')
  }

  getStoreById(id) {
    return Models
      .Product
      .find({ store: id })
      .lean()
      .populate({ path: 'store', options: { lean: true } }, '_id name')
  }

  getProductsByCategory(category) {
    return Models
      .Product
      .find({ category })
      .lean()
      .populate({ path: 'store', options: { lean: true } }, 'name')
  }

  incrementProductPropById(prop, id) {
    return Models
      .Product
      .findByIdAndUpdate(
        id,
        { $inc: { [prop]: 1 } },
        { new: true, select: `${prop}`, lean: true }
      )
      .lean()
  }
}

module.exports = MongoClient