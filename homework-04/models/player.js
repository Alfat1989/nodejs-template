const { Schema, model } = require("mongoose");

const playerSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
});

const Player = model("player", playerSchema);

module.exports = {
  Player,
};
