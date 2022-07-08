/** @format */
const express = require("express");
const customerRoutes = require("./customerRoutes/customerRoutes");
const userRoutes = require("./userRoutes/userRoutes");
const router = express();
const loggingMiddleware = require("../middlewares/loggingMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
// const
router.use("/user", loggingMiddleware, userRoutes);
router.use("/customer", loggingMiddleware, authMiddleware, customerRoutes);

module.exports = router;
