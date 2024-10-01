const { Router } = require("express");
const PostController = require("../controllers/PostController");

const router = Router();

router.post("/", PostController.createPost);

module.exports = router;
