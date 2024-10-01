const { User, Post } = require("../models");

class UserController {
  async createrUser(req, res) {
    try {
      const { email, password, name } = req.body;
      const user = await User.create({ email, password, name });
      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error", error: error.message });
    }
  }
  async findAllUser(req, res) {
    try {
      const users = await User.findAll(
        {
            attributes: ["id", "email", "name"],
            include: {
              model: Post,
              attributes: ["title"],
            },
        }
      );
      res.json({ message: "Users fetched successfully", users: users });
    } catch (error) {
      res.status(500).json({ message: "Error", error: error.message });
    }
  }
}

module.exports = new UserController();
