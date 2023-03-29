const { Router } = require("express");
const router = Router();
const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../Controllers/usersController");

/* A route that is listening for a get request to the root of the server. */
router.get("/", getUsers);
/* This is a route that is listening for a get request to the root of the server. */
router.get("/:id", getUser);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/", createUser);
/* This is a route that is listening for a put request to the root of the server. */
router.put("/:id", updateUser);
/* This is a route that is listening for a delete request to the root of the server. */
router.post("/:id", deleteUser);

module.exports = router;
