/** @format */

const Joi = require("joi").extend(require("@joi/date"));

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customerId: {
        type: DataTypes.INTEGER,

        primaryKey: true,
        autoIncrement: true,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DateOfBirth: {
        type: DataTypes.DATEONLY, // YYYY-MM-DD
        allowNull: false,
      },

      Gender: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["FEMALE", "MALE"]],
        },
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  Customer.associate = function (models) {
    // associations can be defined here
  };

  return Customer;
};

const customerPost = Joi.object().keys({
  FirstName: Joi.string().required().messages({
    "string.base": `FirstName should be a type of 'text'`,
    "string.empty": `FirstName cannot be an empty field`,
  }),

  Lastname: Joi.string().required().messages({
    "string.base": `Lastname should be a type of 'text'`,
    "string.empty": `Lastname cannot be an empty field`,
  }),
  DateOfBirth: Joi.date()
    .format("YYYY-MM-DD")
    .raw()
    .max("2022-6-01")
    .messages({
      "date.format": `Date format is YYYY-MM-DD`,
    })
    .required(),
  Gender: Joi.string()
    .uppercase()
    .valid("FEMALE", "MALE")

    .required()
    .messages({
      "string.base": `Gender should be a type of 'text'`,
      "string.empty": `Gender cannot be an empty field`,
      "string.valid": `Gender cannot be an empty field`,
    }),
});

const customerIdSchema = Joi.number().integer().required();

module.exports.customerPost = customerPost;
module.exports.customerId = customerIdSchema;
