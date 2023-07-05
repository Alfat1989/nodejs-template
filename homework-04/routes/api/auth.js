const express = require("express");

const { ctrlWrapper, authMiddleware } = require("../../middlewares");
const { authOperations } = require("../../controllers");
// const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/register", ctrlWrapper(authOperations.registrate));
router.post("/login", ctrlWrapper(authOperations.login));
router.get("/logout", authMiddleware, ctrlWrapper(authOperations.logout));

module.exports = router;
