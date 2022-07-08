/** @format */

const jwt = require("jsonwebtoken");
const ApiError = require("../error/apiError");
const secret = "test";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      next(ApiError.authError("Not Authenticated"));
      return;
    }
    const userDecoded = jwt.verify(token, secret);
    req.userId = userDecoded.id;
    next();
  } catch (error) {
    next(ApiError.authError("Not Authenticated"));
  }
};

module.exports = authMiddleware;
