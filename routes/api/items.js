const router = require("express").Router();
const listController = require("../../controllers/listController");

// Matches with "/api/items"
router.route("/")
.get(listController.ItemfindAll);

  // Matched with "/api/items/:itemName"
router.route("/:itemName")
.get(listController.ItemfindAll)
.post(listController.ItemCreate)
.put(listController.ItemUpdate)
.delete(listController.ItemRemove);


module.exports = router;