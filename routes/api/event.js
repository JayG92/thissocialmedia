const router = require("express").Router();
const eventController = require("../../controllers/eventcontroller");

// /api/post
router.route("/")
  .get(eventController.findAll)
  .post(eventController.create)

module.exports = router;