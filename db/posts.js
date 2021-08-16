const connection = require("./connection");

function getAllPosts(callback) {
    const sql = `SELECT * FROM posts ORDER BY ID DESC`;
    connection.query(sql, function(err, result) {
        callback(result);
    });
}

function getFivePosts(callback) {
    const sql = `SELECT * FROM posts ORDER BY ID DESC LIMIT 5;`;
    connection.query(sql, function(err, result) {
        callback(result);
    });
}

function insertPost(post, callback) {
    const sql = `INSERT INTO posts (title, post) VALUES(?, ?)`;
    const params = [ post.title, post.postNew ];

    console.log(params);
    connection.query(sql, params, function(err, result) {
        console.log(result);
        callback(result);
    });
}

function getPostById(id, callback) {
    const sql = `SELECT * FROM posts WHERE id = ?`;
    const params = [ id ];
    connection.query(sql, params, function(err, result) {
        callback(result[0]);
    });
}

/* function getPostByAuthorId(id, callback) {
    const sql = `SELECT * FROM posts WHERE author_id = ?`;
    const params = [ id ];
    connection.query(sql, params, function(err, result) {
        callback(result[0]);
    });
} */

module.exports = { getAllPosts, insertPost, getFivePosts, getPostById };