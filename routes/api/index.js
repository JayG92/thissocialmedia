const router = require("express").Router();
const userRoutes = require("./user");

// profile routes
router.use("/profile", userRoutes);

module.exports = router;
