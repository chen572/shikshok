const { Schema, model } = require('mongoose');

// const ProductSchema = new Schema({
//   name: String,
//   price: Number,
//   category: String,
//   description: String,
//   likes: { type: Number, default: 0 },
//   comments: { type: Number, default: 0 },
//   shares: { type: Number, default: 0 },
// });

const ProductSchema = new Schema({
  name: String,
  videoUrl: String,
  store: { type: Schema.Types.ObjectId, ref: 'Store' },
  category: String,
  description: String,
  song: String,
  likes: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  shares: { type: Number, default: 0 }
})

const Product = model('Product', ProductSchema);
module.exports = Product;
