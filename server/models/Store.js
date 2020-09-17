const {Schema, model} = require('mongoose')

const StoreSchema = new Schema({
  avatar: String,
  name: String,
  description: String
})

const Store = model('Store', StoreSchema)
module.exports = Store