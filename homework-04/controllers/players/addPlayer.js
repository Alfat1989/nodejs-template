const { Player } = require("../../models/player");

const addPlayer = async (req, res) => {
  const { body } = req;
  const result = await Player.create(body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addPlayer;
