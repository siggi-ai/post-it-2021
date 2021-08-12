const express = require("express");
const authorController = require("./controllers/authorController");
const homepageController = require("./controllers/homepageController");
const postsController = require("./controllers/postsController");

const router = express.Router();

// router.get("/", homepageController.renderHomepage);

router.get("/", homepageController.homepage);
router.get("/authors", authorController.renderAuthors);
router.get("/posts", postsController.renderPosts);
router.get("/new_author", authorController.createAuthor);
router.post("/new_author", authorController.createAuthor);
router.get("/new_post", postsController.createPost);
router.post("/new_post", postsController.createPost);
router.get("/author", authorController.renderAuthor);             //author?id=<number>
/* router.get("/post", postsController.renderPost); */            //post?id=<number></number>


module.exports = router;
