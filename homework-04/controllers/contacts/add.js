const { Contact } = require("../../models");
const { BadRequest } = require("http-errors");

const add = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    throw new BadRequest("missing required name field");
  }
  const result = await Contact.create({ name, email, phone });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
