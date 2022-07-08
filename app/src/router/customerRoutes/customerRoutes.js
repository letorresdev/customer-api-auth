/** @format */

const express = require("express");

// Api Errors
const ApiError = require("../../error/apiError");
// Customer Service - Database Queries
const CustomerService = require("../../services/customersService/customerService");
// Db model
const customerSchema = require("../../db/mysql/models/customer");
// Schema Validator
const validateSchema = require("../../middlewares/schemaMiddleware");

const customerService = new CustomerService();

const router = express();

//  GET customer by customerId
router.get(
  "/:id",

  validateSchema.validateId(customerSchema.customerId),
  async (req, res, next) => {
    let id = parseInt(req.params.id);
    if (!Number.isInteger(id)) {
      next(ApiError.badRequestId("CustomerId Must Be a Number"));
      return;
    }

    try {
      let customer = await customerService.findOne(id);

      if (!customer) {
        next(ApiError.notFound("Customer Not Found"));
        return;
      }

      res.setHeader("Content-Type", "application/json");
      res.send(customer);
    } catch (e) {
      next(ApiError.serVerError("Database Error"));
    }
  }
);

// POST customer
router.post(
  "/",
  validateSchema.validatePost(customerSchema.customerPost),
  async (req, res, next) => {
    let customer = req.body;

    try {
      customer = await customerService.create(customer);

      if (!customer) {
        next(ApiError.notFound("Customer Not Found"));
        return;
      }
      res.send(customer);
    } catch (e) {
      next(ApiError.serVerError("Database Error"));
    }
  }
);

// METHOD NOT ALLOW
router.all("/:id", async (req, res, next) => {
  next(ApiError.methodNotAllowed("Method Not Allow In This Route"));
  return;
});

router.all("/", async (req, res, next) => {
  next(ApiError.methodNotAllowed("Method Not Allow In This Route"));
  return;
});

module.exports = router;
