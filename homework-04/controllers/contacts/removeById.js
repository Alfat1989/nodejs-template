const { Contact } = require("../../models");
const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw new NotFound("Not found");
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: { message: "contact deleted" },
  });
};

module.exports = removeById;
