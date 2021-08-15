const express = require("express");
const authorController = require("./controllers/authorController");

const postsController = require("./controllers/postsController");

const router = express.Router();

// router.get("/", homepageController.renderHomepage);

router.get("/", postsController.renderFivePosts);
router.get("/authors", authorController.renderAuthors);
router.get("/posts", postsController.renderPosts);
router.get("/new_author", authorController.createAuthor);
router.post("/new_author", authorController.createAuthor);
router.get("/new_post", postsController.createPost);
router.post("/new_post", postsController.createPost);
router.get("/author", authorController.renderAuthor);             //author?id=<number>
router.get("/post", postsController.renderPostById);            //post?id=<number></number>
router.get("/post", authorController.authorsSelect);

module.exports = router;
