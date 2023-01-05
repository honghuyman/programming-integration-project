const express = require("express");
const transactionRoutes = express.Router();
const Category = require("../models/category");
const Transaction = require("../models/transaction");
const User = require("../models/user");

transactionRoutes.get('/balance/:user_ID', function (req, res) {
    const { user_ID } = req.params;
    User.findById(user_ID).select("-_id account_balance").exec(function (err, record) {
        if (err) res.send(err);
        res.json(record);
    })
})

transactionRoutes.get('/all-transactions/:user_ID', (req, res) => {
    const { user_ID } = req.params;
    Transaction.find({ user_ID })
        .populate('category_ID')
        .select('-user_ID')
        .sort('-date')
        .exec(function (err, records) {
            if (err) return res.send(err);
            const data = records;

            // this gives an object with dates as keys
            const groups = data.reduce((groups, transaction) => {
                const date = transaction.date.toISOString().split('T')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(transaction);
                return groups;
            }, {});

            // Edit: to add it in the array format instead
            const groupArrays = Object.keys(groups).map((date) => {
                return {
                    date,
                    transactions: groups[date]
                };
            });

            res.json(groupArrays);
        })
})

transactionRoutes.post('/add-transaction', function (req, res) {
    console.log("Add transaction: ", req.body)
    const { user_ID, amount, category_ID, note, date } = req.body;
    const transaction = new Transaction({ user_ID, amount, category_ID, note, date })

    transaction.save((err, record) => {
        if (err) return res.send(err)
        // update account_balance
        User.findById(user_ID, function (err, record) {
            if (err) return res.send(err);
            if (record) {
                record.account_balance = record.account_balance + amount;
                record.save();
                res.send({ message: "SUCCESS" });
            }
        })
    })
})

transactionRoutes.post('/update-transaction', function (req, res) {
    console.log("Update transaction: ", req.body)
    const { transaction_ID, amount, category_ID, note, date } = req.body;

    Transaction.findById(transaction_ID, function (err, trans) {
        if (err) return res.send(err)

        if (trans) {
            let difference = amount - trans.amount
            trans.amount = amount;
            trans.category_ID = category_ID;
            trans.note = note;
            trans.date = date;
            trans.save();

            User.findById(trans.user_ID, function (err, user) {
                if (err) return res.send(err)
                if (user) {
                    user.account_balance = user.account_balance + difference;
                    user.save();
                    res.send({ message: "SUCCESS" });
                }
            })
        }
    })
})

transactionRoutes.post('/delete-transaction', function (req, res) {
    console.log("Delete transaction: ", req.body)
    const { transaction_ID } = req.body;
    Transaction.findByIdAndDelete(transaction_ID, function (err, trans) {
        if (err) return res.send(err)
        console.log(trans);
        User.findById(trans.user_ID, function (err, user) {
            if (err) return res.send(err)
            if (user) {
                user.account_balance = user.account_balance - trans.amount;
                user.save();
                res.send({ message: "SUCCESS" });
            }
        })
    })
})

transactionRoutes.get('/transaction/:transaction_ID', (req, res) => {
    const { transaction_ID } = req.params;
    Transaction.findById(transaction_ID)
        .populate('category_ID')
        .select('-user_ID')
        .exec(function (err, records) {
            if (err) return res.send(err);
            res.json(records);
        })
})

module.exports = transactionRoutes;