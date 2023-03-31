const { Router } = require("express");
const router = Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProductByid,
} = require("../Controllers/productsControll");
const { validateProductsCreate } = require("../middleware/productsValidator");


/* A route that is listening for a get request to the root of the server. */
router.get("/", getProducts);
/* This is a route that is listening for a get request to the root of the server. */
router.get("/:id", getProduct);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/", validateProductsCreate, createProduct);
/* This is a route that is listening for a put request to the root of the server. */
router.put("/:id", updateProduct);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/:id", deleteProductByid);

module.exports = router;
