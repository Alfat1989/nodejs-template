const express = require("express");
const { ctrlWrapper, authMiddleware } = require("../../middlewares");
const { contactsOperations } = require("../../controllers");

const router = express.Router();

router.get("/", authMiddleware, ctrlWrapper(contactsOperations.getAll));
router.get("/:contactId", ctrlWrapper(contactsOperations.getById));
router.post("/", authMiddleware, ctrlWrapper(contactsOperations.add));
router.delete("/:contactId", ctrlWrapper(contactsOperations.removeById));

module.exports = router;
