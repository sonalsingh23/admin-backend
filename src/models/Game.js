// models/Game.js
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  game_uid: String,       // IMPORTANT
  provider: String,
  thumbnail: String,
  category: String,
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("games", gameSchema);