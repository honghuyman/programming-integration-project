let mongoose = require('mongoose')

let testSchema = new mongoose.Schema({
    test: String
})

module.exports = mongoose.model('Test', testSchema)