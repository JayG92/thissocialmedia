const router = require("express").Router();

// /api/profile routes
router.use("/user", require("./user"));
// /api/post
router.use("/posts", require("./post"));

router.use("/events", require("./event"))

module.exports = router;
