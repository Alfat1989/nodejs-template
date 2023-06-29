const express = require("express");

const { ctrlWrapper } = require("../../middlewares");
const { authOperations } = require("../../controllers");
// const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/register", ctrlWrapper(authOperations.registrate));
router.post("/login", ctrlWrapper(authOperations.login));

module.exports = router;
