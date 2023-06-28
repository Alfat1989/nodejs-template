const express = require("express");

const { ctrlWrapper } = require("../../middlewares");
const { authOperations } = require("../../controllers");
// const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/register", ctrlWrapper(authOperations.registrate));

module.exports = router;
