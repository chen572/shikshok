const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoSchema = new Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: Number,
  messages: Number,
  shares: Number,
})

const Video = mongoose.model('Video', VideoSchema)
module.exports = Video