/** @format */

const express = require("express");
const router = require("./router/index");
//  Correlation id
const correlator = require("express-correlation-id");
// Error Middleware
const errorMiddleware = require("./middlewares/errorMiddleware");

function routeNotFound(req, res, next) {
  res.status(404).send({
    status: 404,
    error: "Route not found",
  });
  next();
}

const app = express();

app.use(express.json());
app.use(correlator());
// Routes
app.use("/", router);

// Middlewares
app.use(errorMiddleware);
app.use(routeNotFound);

// Listen Server
const PORT = 8000;
app.listen(8000, () => console.log(`🚀 Server running on port ${PORT} 🚀`));
