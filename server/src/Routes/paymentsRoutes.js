const { Router } = require("express");
const {
    getPayments, getPayment, createPayment
} = require("../Controllers/paymentsController");

const router = Router();

/* A route that is listening for a get request to the root of the server. */
router.get("/", getPayments);
/* This is a route that is listening for a get request to the root of the server. */
router.get("/:id", getPayment);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/", createPayment);

module.exports = router;