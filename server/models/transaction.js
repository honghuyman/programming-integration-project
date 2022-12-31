let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let transactionSchema = new mongoose.Schema({
    user_ID: {type: Schema.Types.ObjectId, ref: 'User'},
    amount: Number,
    category_ID: {type: Schema.Types.ObjectId, ref: 'Category'},
    note: String,
    date: Date
})

module.exports = mongoose.model('Transaction', transactionSchema)