const User = require("../../models");

const register = async (req, res) => {
  const { body } = req;
  const result = await User.create(body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = register;
