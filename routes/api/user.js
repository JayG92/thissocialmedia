const router = require("express").Router();
const userController = require("../../controllers/userController");
const postController = require("../../controllers/postController");

router.route("/")
  .get(userController.findAll)
  .post(userController.create)
  .get(postController.findAll)
  .post(postController.create)
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
