const express = require("express");
const testRoutes = express.Router();
const dbo = require("../db/conn");

testRoutes.route("/test").get(function (req, res) {
    let db_connect = dbo.getDb("test");
    db_connect
        .collection("test")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = testRoutes;