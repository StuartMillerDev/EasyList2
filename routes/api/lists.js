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

// Matches with "/api/lists/edit/:name"
  router.route("/edit/:name")
  .put(listController.update);
module.exports = router;
