const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    mail: String,
    address: String,
})

const User = model('User', UserSchema)
module.exports = User