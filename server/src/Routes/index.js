const { Router } = require("express");
const router = Router();

const UsersRoutes = require("./usersRoutes");
router.use("/users", UsersRoutes);

module.exports = router;
