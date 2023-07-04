const { Contact } = require("../../models");
const { BadRequest } = require("http-errors");

const add = async (req, res) => {
  const { _id } = req.user;
  const { body } = req;
  if (!body.name || !body.email || !body.phone) {
    throw new BadRequest("missing required name field");
  }
  const result = await Contact.create({ ...body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
