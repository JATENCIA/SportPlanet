const { Router } = require("express");
const router = Router();

const usersRoutes = require("./usersRoutes");
// const storesRoutes = require("./storesRoutes");
const productsRoutes = require("./productsRoutes");

router.use("/users", usersRoutes);
// router.use("/stores", storesRoutes);
router.use("/products", productsRoutes);

// Importar todos los routers;
//const UsersRoutes = require("./usersRoutes");
const paymentsRoutes = require("./paymentsRoutes");

// Configurar los routers
//router.use("/users", UsersRoutes);
router.use("/payments", paymentsRoutes);

module.exports = router;
