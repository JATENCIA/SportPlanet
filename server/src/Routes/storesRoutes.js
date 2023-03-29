const { Router } = require("express");
const router = Router();
const {
  getStores,
  getStore,
  createStore,
  updateStore,
  deleteStore,
} = require("../Controllers/storesController");


/* A route that is listening for a get request to the root route. */
router.get("/", getStores);
/* This is a route that is listening for a get request to the root route. */
router.get("/:id", getStore);
/* This is a route that is listening for a post request to the root route. */
router.post("/", createStore);
/* Listening for a put request to the root route. */
router.put("/:id", updateStore);
/* Listening for a post request to the root route. */
router.post("/:id", deleteStore);

module.exports = router;
