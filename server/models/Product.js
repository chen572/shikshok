const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  videoUrl: String,
  store: { type: Schema.Types.ObjectId, ref: 'Store' },
  description: String,
  song: String,
  likes: { type: Number, default: 0 },
  Reviews: { type: Number, default: 0 },
  shares: { type: Number, default: 0 }
})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product