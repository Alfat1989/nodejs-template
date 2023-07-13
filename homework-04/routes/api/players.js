const express = require("express");
const { playersOperations } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.post("/", ctrlWrapper(playersOperations.addPlayer));

module.exports = router;
