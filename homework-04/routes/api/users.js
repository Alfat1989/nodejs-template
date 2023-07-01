const express = require("express");

const { ctrlWrapper, authMiddleware } = require("../../middlewares");
const { usersOperations } = require("../../controllers");

const router = express.Router();

router.get("/current", authMiddleware, ctrlWrapper(usersOperations.getCurrent));

module.exports = router;
