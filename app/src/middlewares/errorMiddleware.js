/** @format */

const ApiError = require("../error/apiError");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.code).json({ status: err.code, message: err.message });
  }

  res.status(500).json({
    status: 500,
    message: "Internal Error",
  });
};

module.exports = errorMiddleware;
