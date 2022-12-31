let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    account_balance: Number
})

let projectSchema = new mongoose.Schema({
    project_name: String,
    reality_money: Number,
    target: Number,
    start_date: Date,
    end_date: Date
})

let user_be_in_projectSchema = new mongoose.Schema({
    user_ID: String,
    project_ID: String,
    priviledge: String
})

let transactionSchema = new mongoose.Schema({
    user_ID: String,
    amount: Number,
    category_ID: String,
    note: String,
    date: Date
})

let categorySchema = new mongoose.Schema({
    name: String,
    type: String,
})

module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('Project', projectSchema)
module.exports = mongoose.model('user_be_in_project', user_be_in_projectSchema)
module.exports = mongoose.model('Transaction', transactionSchema)
module.exports = mongoose.model('Category', categorySchema)