/** @format */
const uuid = require("uuid");

const loggingMiddleware = (req, res, next) => {
  var correlationId = req.get("x-correlation-id") || uuid.v4();
  res.set("x-correlation-id", correlationId);
  next();
};

module.exports = loggingMiddleware;
