/** @format */

const Customer = require("../../db/mysql/models/index")["Customer"];

const ApiError = require("../../error/apiError");
class CustomerService {
  async findAll() {
    return await Customer.findAll();
  }

  async findOne(id) {
    return await Customer.findOne({ where: { customerId: id } });
  }
  async create(customer) {
    return await Customer.create(customer.value);
  }
}

module.exports = CustomerService;
