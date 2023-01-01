let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let user_be_in_projectSchema = new mongoose.Schema({
    user_ID: {type: Schema.Types.ObjectId, ref: 'User'},
    project_ID: {type: Schema.Types.ObjectId, ref: 'Project'},
    privilege: String,
    money: Number
})

module.exports = mongoose.model('user_be_in_project', user_be_in_projectSchema)