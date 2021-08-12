const post = require("../db/posts");

function renderPosts(req, res) {
    post.getAllPosts(function(result) {
        const pageData = {
            posts: result
        }
        res.render("posts.ejs", pageData);
        res.render("index.ejs", pageData);
    });
};

function createPost(req, res) {
    if (req.body.submitted) {
        // It would be a good idea to use the validator here
        const title = req.body.title;
        const postNew = req.body.postNew;

        const postObject = { title, postNew };

        console.log(postObject);

        post.insertPost(postObject, function(result) {
            res.render("postNew.ejs");
        });
    } else {
        res.render("postNew.ejs");
    }; 
};

/* function renderPost(req, res) {
    const post = req.query.post;

    post.getPost(id, function(result) {
        const pageData = {
            post: result
        }
        res.render("post.ejs", pageData);
    });
} */



module.exports = { renderPosts, createPost };