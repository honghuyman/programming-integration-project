let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    account_balance: Number
})

module.exports = mongoose.model('User', userSchema)