const { Router } = require("express");
const router = Router();

// Importar todos los routers;
//const UsersRoutes = require("./usersRoutes");

// Configurar los routers
//router.use("/users", UsersRoutes);

const usersRoutes = require("./usersRoutes");
const paymentRoutes = require("./paymentRoutes");
const slidersRoutes = require("./slidersRoutes");
const productsRoutes = require("./productsRoutes");
const productReviewRoutes = require("./productReviewRoutes");

router.use("/users", usersRoutes);
router.use("/sliders", slidersRoutes);
router.use("/products", productsRoutes);
router.use("/payments", paymentRoutes);
router.use("/productReview", productReviewRoutes);

// Importar todos los routers;
const UsersRoutes = require("./usersRoutes");

// Configurar los routers
router.use("/users", UsersRoutes);

module.exports = router;
