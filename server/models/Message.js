const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
    fromStore: Boolean,
    content: String,
    date: {type: Date, default: new Date()}
})

const Message = model('Message', MessageSchema)
module.exports = Message