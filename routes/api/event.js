const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// /api/post
router.route("/")
  .get(eventController.findAll)
  .post(eventController.create)

module.exports = router;