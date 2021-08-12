const connection = require("./connection");

function getAllAuthors(callback) {
    const sql = `SELECT * FROM authors`;
    connection.query(sql, function(err, result) {
        callback(result);
    });
}

function getAuthorById(id, callback) {
    const sql = `SELECT * FROM authors WHERE id = ?`;
    const params = [ id ];
    connection.query(sql, params, function(err, result) {
        callback(result[0]);
    });
}

function insertAuthor(author, callback) {
    const sql = `INSERT INTO authors (name, description) VALUES(?, ?)`;
    const params = [ author.name, author.description ];

    connection.query(sql, params, function(err, result) {
        console.log(result);
        callback(result);
    });
}

module.exports = { getAllAuthors, getAuthorById, insertAuthor };