/** @format */
const express = require("express");

const ApiError = require("../../error/apiError");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = "test";
const router = express();

// Users
const users = require("../../config/config")["users"];

// signin
router.post("/signin", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Find if the user is in the database
    var user = users.find((user_) => {
      return user_.username === username;
    });

    if (!user) {
      next(ApiError.notFound("User Not Found"));
      return;
    }

    const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

    if (!passwordCorrect) {
      next(ApiError.badRequestPass("Password Incorrect"));
      return;
    }

    const token = jwt.sign({ email: user.email, id: user.id }, secret, {
      expiresIn: "2h",
    });
    res.json({ result: username, token });
  } catch (e) {
    next(ApiError.serVerError("Internal Error"));
  }
});

// signup
router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Find if the user is in the database
    var user = users.find((user_) => {
      return user_.username === username;
    });

    if (user) {
      next(ApiError.userAlreadyExist("User already Exist"));
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);

    // The new user is saved in the database
    users.push({
      username: username,
      password: password,
      passwordHash: passwordHash,
      userId: Math.floor(Math.random() * 999),
    });

    // This check if the new user is already created
    const userCreated = users.find((user_) => {
      return user_.username === username;
    });

    const token = jwt.sign(
      { email: userCreated.username, id: userCreated.userId },
      secret,
      {
        expiresIn: "2h",
      }
    );

    res.json({ username, token });
  } catch (e) {
    next(ApiError.serVerError("Internal Error"));
  }
});

// METHOD NOT ALLOW
router.all("/signin", async (req, res, next) => {
  next(ApiError.methodNotAllowed("Method Not Allow In This Route"));
  return;
});

router.all("/signup", async (req, res, next) => {
  next(ApiError.methodNotAllowed("Method Not Allow In This Route"));
  return;
});

module.exports = router;
