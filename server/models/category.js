let mongoose = require('mongoose')

let categorySchema = new mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model('Category', categorySchema)