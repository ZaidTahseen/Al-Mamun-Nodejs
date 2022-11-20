const router = require("express").Router();
const {
  createUser,
  loginUser,
  getAllUserInfo,
  getSpecificUserInfo,
  editMyProfile
} = require("../controller/userController");

const isUserAuthenticated = require('../middleware/userAuth')

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/all", isUserAuthenticated , getAllUserInfo);
router.get("/:id", isUserAuthenticated , getSpecificUserInfo);
router.put("/edit/:id", isUserAuthenticated , editMyProfile);

module.exports = router;
