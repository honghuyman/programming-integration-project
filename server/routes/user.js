const express = require("express");
const userRoutes = express.Router();
const User = require("../models/user");

userRoutes.post("/login", (req, res) => {
    console.log("login: ", req.body)
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "SUCCESS", user: ({ _id: user._id }) })
            } else {
                res.send({ message: "WRONG PASSWORD" })
            }
        } else {
            res.send({ message: "NOT REGISTERED" })
        }
    })
});

userRoutes.post("/register", (req, res) => {
    console.log("register: ", req.body)
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
        if (user) {
            res.send({ message: "ALREADY EXIST" })
        } else {
            const user = new User({ username, password, account_balance: 0 })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "SUCCESS" })
                }
            })
        }
    })
})

userRoutes.get("/find-users/:str", (req, res) => {
    const { str } = req.params;
    let query = User.find({ "username": { "$regex": str, "$options": "i" } }).select('username');
    query.exec(function (err, users) {
        if (err)
            res.send(err);
        else
            res.send(users);
    })
});

module.exports = userRoutes;