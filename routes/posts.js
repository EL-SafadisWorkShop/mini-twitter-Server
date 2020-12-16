const express = require("express");
//Creates route
const Post = require("../models/Post");

const router = express.Router();
router
  .route("/")
  .get((req, res) => {
    res.send("Hello");
  })
  .post(async (req, res) => {
    try {
      const newMessage = await Post.create({ ...req.body });
      res.status(201).json(newMessage);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;
