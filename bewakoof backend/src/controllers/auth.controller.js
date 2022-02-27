require("dotenv").config();
const { append } = require("express/lib/response");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    // we will try to find the user with the email provided

    let user = await User.findOne({ mobile_number: req.body.mobile_number })
      .lean()
      .exec();

    // if the user is found then it is an error
    if (user)
      return res
        .status(400)
        .send({ message: "Please try another Mobile Number" });

    // if user is not found then we will create the user with the email and the password provided
    user = await User.create(req.body);

    // user = new User()
    // user.email = req.body.email
    // user.password = req.body.password
    // user.save();

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token

    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    const user = await User.findOne({ mobile_number: req.body.mobile_number });

    // If user is not found then return error
    if (!user)
      return res
        .status(400)
        .send({ message: "Please try another mobile number or password" });

    // if user is found then we will match the passwords
    const match = user.checkPassword(req.body.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another mobile number or password" });

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login_mobile = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    const user = await User.findOne({ mobile_number: req.body.mobile_number });

    // If user is not found then return error
    if (!user)
      return res
        .status(400)
        .send({ message: "Please try another mobile number or password" });
    const token = newToken(user);
    // then return the user and the token
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { register, login, newToken, login_mobile };
