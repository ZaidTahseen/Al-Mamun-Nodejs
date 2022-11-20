const router = require("express").Router();
const { createPost , updatePost } = require("../controller/postController");

const isUserAuthenticated = require("../middleware/userAuth");

router.post("/create", isUserAuthenticated, createPost);
router.put("/edit", isUserAuthenticated, updatePost); // { title , contendt , postId }

module.exports = router;
