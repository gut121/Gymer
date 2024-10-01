const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router.post("/", UserController.createrUser);
router.get("/", UserController.findAllUser);

module.exports = router;
