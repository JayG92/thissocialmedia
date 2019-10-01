const router = require("express").Router();
const postController = require("../../controllers/postcontroller");

// /api/post
router.route("/")
  .get(postController.findAll)
  .post(postController.create)

module.exports = router;
