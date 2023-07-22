const { Player } = require("../../models/player");

const getPlayers = async (req, res) => {
  //   const player = await Player.find({ level: { $in: [3, 5] } });
  //   const player = await Player.find({}, { level: 1, _id: 0 });
  const player = await Player.find({}).skip(2).limit(2);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      player,
    },
  });
};

module.exports = getPlayers;
