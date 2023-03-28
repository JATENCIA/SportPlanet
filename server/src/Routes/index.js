const { Router } = require("express");
const router = Router();
// Importar todos los routers;
const UsersRoutes = require("./usersRoutes");
const PaymentsRoutes = require("./paymentsRoutes");

// Configurar los routers
router.use("/users", UsersRoutes);
router.use("/payments", PaymentsRoutes);

module.exports = router;
