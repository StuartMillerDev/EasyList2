const router = require("express").Router();
const listController = require("../../controllers/listController");

// Matches with "/api/lists"
router
  .route("/")
  .get(listController.findAll)
  .post(listController.create);

// Matches with "/api/lists/:name"
router.route("/:name")
  .get(listController.findByName)
  .put(listController.update)
  .delete(listController.remove);

router.route("/items")
.get(listController.ItemfindAll);

  // Matched with "/api/items/:itemName"
router.route("/:itemName")
.get(listController.ItemfindAll)
.post(listController.ItemCreate)
.put(listController.ItemUpdate)
.delete(listController.ItemRemove);

module.exports = router;
