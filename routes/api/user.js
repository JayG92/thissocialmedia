const router = require("express").Router();
const {requireAuth, requireSignin } = require("../auth");

const userController = require("../../controllers/userController");

router.route("/")
  //.get(requireAuth, userController.findAll)
  .post(userController.create)
  
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
  
router
  .route("/signin")
  .post(requireSignin, userController.signIn);

router
.route("/signup")
.post(userController.signUp);

module.exports = router;
