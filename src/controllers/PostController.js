const { Op } = require("sequelize");
const { Post } = require("../models");

class PostController {
  async createPost(req, res) {
    try {
      const { title, content, userId } = req.body;
      const post = await Post.create({ title, content, userId });
      res.status(201).json({message: " successfully created post",post:post});
    } catch (error) {
        res.status(500).json({message: "Error", error: error.message});
    }
  }
}

module.exports = new PostController();
