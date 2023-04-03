const { Router } = require("express");
const router = Router();

// Importar todos los routers;
//const UsersRoutes = require("./usersRoutes");

// Configurar los routers
//router.use("/users", UsersRoutes);


const usersRoutes = require("./usersRoutes");
// const storesRoutes = require("./storesRoutes");
const productsRoutes = require("./productsRoutes");
const productReviewRoutes = require("./productReviewRoutes");
<<<<<<< HEAD
// const userReviewRoutes = require("./userReviewRoutes");
=======
const paymentsRoutes = require("./paymentsRoutes");
>>>>>>> 436e1ce4c5765e77e2cd36c0978276feb2fadb22

router.use("/users", usersRoutes);
// router.use("/stores", storesRoutes);
router.use("/products", productsRoutes);
router.use("/productReview", productReviewRoutes);
<<<<<<< HEAD
// router.use("/userReview", userReviewRoutes);
=======
router.use("/payments", paymentsRoutes);

>>>>>>> 436e1ce4c5765e77e2cd36c0978276feb2fadb22

// Importar todos los routers;
const UsersRoutes = require("./usersRoutes");
const PaymentsRoutes = require("./paymentsRoutes");

// Configurar los routers
router.use("/users", UsersRoutes);
router.use("/payments", PaymentsRoutes);

module.exports = router;
