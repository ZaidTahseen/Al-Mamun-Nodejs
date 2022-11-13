const router = require("express").Router();
const {
  createUser,
  loginUser,
  getAllUserInfo,
  getSpecificUserInfo
} = require("../controller/userController");

const isUserAuthenticated = require('../middleware/userAuth')

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/all", isUserAuthenticated , getAllUserInfo);
router.get("/:id", isUserAuthenticated , getSpecificUserInfo);

module.exports = router;
