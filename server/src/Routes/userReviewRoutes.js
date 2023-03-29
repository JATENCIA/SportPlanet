const { Router } = require("express");
const router = Router();

const {
  getUserReview,
  createUserReview,
  deleteUserReviewByid,
  updateUserReview,
} = require("../Controllers/UserReviewControll");

/* A route that is listening for a get request to the root of the server. */
router.get("/", getUserReview);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/", createUserReview);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/:id", deleteUserReviewByid);
/* This is a route that is listening for a put request to the root of the server. */
router.put("/:id", updateUserReview);

module.exports = router;
