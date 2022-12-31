const express = require("express");
const testRoutes = express.Router();
const Test = require("../models/wallet");

testRoutes.route("/test").get(function (req, res) {
    Test.find()
    .then(wallet => res.json(wallet))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = testRoutes;