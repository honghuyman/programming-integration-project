let mongoose = require('mongoose')

let projectSchema = new mongoose.Schema({
    project_name: String,
    reality_money: Number,
    target: Number,
    start_date: Date,
    end_date: Date
})

module.exports = mongoose.model('Project', projectSchema)