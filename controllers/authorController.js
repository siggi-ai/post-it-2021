const author = require("../db/author");

function renderAuthors(req, res) {
    author.getAllAuthors(function (result) {
        const pageData = {
            authors: result
        }
        res.render("authors.ejs", pageData);
    });
}

function renderAuthor(req, res) {
    const id = req.query.id;

    author.getAuthorById(id, function (result) {
        const pageData = {
            author: result
        }
        res.render("author.ejs", pageData);
    });
}

function createAuthor(req, res) {
    if (req.body.submitted) {
        // It would be a good idea to use the validator here
        const name = req.body.name;
        const description = req.body.description;

        const authorObject = { name, description };

        author.insertAuthor(authorObject, function (result) {
            res.render("authorNew.ejs");
        });
    } else {

        res.render("authorNew.ejs");

    }

}



function authorsSelect(req, res) {
    author.getAllAuthorsSelect(function (result) {
        const pageData = {
            authors: result
        }
        res.render("postNew.ejs", pageData);
    });
}

module.exports = { renderAuthors, renderAuthor, createAuthor, authorsSelect };