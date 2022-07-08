/** @format */

const ApiError = require("../error/apiError");

// validate the body in route /customer/ - Path: POST
const validatePost = (schema) => {
  return async (req, res, next) => {
    try {
      const validateReqBody = await schema.validate(req.body);
      req.body = validateReqBody;
      if (req.body.error) {
        next(ApiError.badRequest(req.body.error));
      }
      next();
    } catch (e) {
      next(ApiError.badRequest(e));
    }
  };
};

// validateId in route /customer/:id  - Path: POST
const validateId = (schema) => {
  return async (req, res, next) => {
    try {
      const validateReqBody = await schema.validate(req.params.id);
      req.body = validateReqBody;
      if (req.body.error) {
        next(ApiError.badRequest(req.body.error));
      }
      next();
    } catch (e) {
      next(ApiError.badRequest(e));
    }
  };
};

module.exports.validatePost = validatePost;
module.exports.validateId = validateId;
