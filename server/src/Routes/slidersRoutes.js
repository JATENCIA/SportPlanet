const { Router } = require("express");
const {
  getSliders,
  getSlider,
  createSlider,
  deleteSlider,
} = require("../Controllers/slidersController");
const validateSlidersCreate = require("../middleware/slidersValidator");
const router = Router();

/* A route that is listening for a get request to the root of the server. */
router.get("/", getSliders);
/* This is a route that is listening for a get request to the root of the server. */
router.get("/:id", getSlider);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/", validateSlidersCreate, createSlider);
/* This is a route that is listening for a delete request to the root of the server. */
router.post("/:id", deleteSlider);

module.exports = router;
