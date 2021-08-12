const author = require("../db/author");
const post = require("../db/posts");

function homepage(req, res) {
    res.render("index.ejs");
};



module.exports = { homepage };