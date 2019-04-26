const router = require("express").Router();
const listRoutes = require("./lists");

// list routes
router.use("/lists", listRoutes);

module.exports = router;
