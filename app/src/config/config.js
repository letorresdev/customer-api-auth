/** @format */

var users = [
  {
    userId: 772,
    username: "letorres.dev@gmail.com",
    password: "123456",
    passwordHash:
      "$2a$12$jvaz6szsUv0YnI.rny5oeuTf0o/W1dd.q1KhVB4Ap0U5Q6Ie0FZru",
  },
  {
    userId: 772,
    username: "andres.dev@gmail.com",
    password: "andres",
    passwordHash:
      "$2a$12$r1rp9hyJi2qoB9J4zxEW2O79zQPOJIKJGmAOFKf6tyNkGJKrkAfP6",
  },
  {
    userId: 772,
    username: "sydney.dev@gmail.com",
    password: "australia",
    passwordHash:
      "$2a$12$EtQp7vn3jT9QCvPFBG.Oduq8QCnEGHkW9CHE1lt4jR.vZ1Qv3bSdO",
  },
];

const configDatabase = {
  host: "localhost",
  username: "root",
  password: "root",
  port: 3306,
  database: "PlansDb",
  dialect: "mysql",
};

module.exports.users = users;
module.exports.configDatabase = configDatabase;
