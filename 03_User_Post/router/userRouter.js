const router = require("express").Router();
const { createUser, loginUser } = require("../controller/userController");

// creater User
router.post("/", createUser);
router.post("/login", loginUser);

// router.get();

module.exports = router;
