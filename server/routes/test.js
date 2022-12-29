const express = require("express");
const testRoutes = express.Router();
const Test = require("../models/test");

testRoutes.route("/test").get(function (req, res) {
    Test.find()
    .then(tests => res.json(tests))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = testRoutes;