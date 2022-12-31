const express = require("express");
const categoryRoutes = express.Router();
const Category = require("../models/category");

categoryRoutes.route('/all-categories').get((req, res) => {
    Category.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = categoryRoutes;