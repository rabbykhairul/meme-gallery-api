const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
  url: String,
  base64Image: String,
}, { timestamps: true });

module.exports = mongoose.model("Memes", memeSchema);