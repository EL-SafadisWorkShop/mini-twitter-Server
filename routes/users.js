const express = require("express");
const User = require("../models/User");
//Creates route
const router = express.Router();
router
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (err) {
      console.log(err);
    }
  })
  .post(async (req, res) => {
    try {
      const newUser = await User.create({ ...req.body });
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;
