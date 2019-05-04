const router = require("express").Router();
const listRoutes = require("./lists");
const itemRoutes = require("./items");
// list route
router.use("/lists", listRoutes);
// items route
router.use("/items", itemRoutes)
module.exports = router;
