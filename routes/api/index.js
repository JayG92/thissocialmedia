const router = require("express").Router();

// /api/profile routes
router.use("/profile", require("./user"));
// /api/post
router.use("/posts", require("./post"));

module.exports = router;
