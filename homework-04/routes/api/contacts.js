const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { contactsOperations } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(contactsOperations.getAll));
router.get("/:contactId", ctrlWrapper(contactsOperations.getById));
router.post("/", ctrlWrapper(contactsOperations.add));
router.delete("/:contactId", ctrlWrapper(contactsOperations.removeById));

module.exports = router;
