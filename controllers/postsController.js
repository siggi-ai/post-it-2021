const post = require("../db/posts");

function renderPosts(req, res) {
    post.getAllPosts(function(result) {
        const pageData = {
            posts: result
        }
        res.render("posts.ejs", pageData);
    });
};

function homepage(req, res) {
    res.render("index.ejs");
};


function renderFivePosts(req, res) {
    post.getFivePosts(function(result) {
        const pageData = {
            fivePosts: result
        }
        res.render("index.ejs", pageData);
    });
}


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


function renderPostById(req, res) {
    const id = req.query.id;

    author.getPostById(id, function (result) {
        const pageData = {
            post: result
        }
        res.render("author.ejs", pageData);
        console.log(post);
    });
}


/* function renderPostByAuthorId(req, res) {
    const id = req.query.id;

    author.getPostByAuthorId(id, function (result) {
        const pageData = {
            post: result
        }
        res.render("posts.ejs", pageData);
        console.log(post);
    });
} */


/* function renderPost(req, res) {
    const post = req.query.post;

    console.log(post);

    author.getAllPosts(function (result) {
        const pageData = {
            post: result
        }
        res.render("index.ejs", pageData);
    });
} */





module.exports = { renderPosts, createPost, renderFivePosts, homepage, renderPostById };