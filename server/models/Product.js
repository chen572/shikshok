const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  videoUrl: String,
  store: { type: Schema.Types.ObjectId, ref: 'Store' },
  description: String,
  song: String,
  likes: Number,
  Reviews: Number,
  shares: Number,
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product