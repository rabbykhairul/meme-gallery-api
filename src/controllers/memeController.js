const Memes = require("../models/meme");
const { getBase64StringFromBufferData } = require("../utils/helper");

const uploadMeme = async (req, res) => {
  try {
    const { body: { url }, files } = req;
    const base64Image = getBase64StringFromBufferData(files?.memeFile?.data);
    
    const newMeme = new Memes({ url, base64Image });
    await newMeme.save();
    return res.status(201).send({ success: true, meme: newMeme.toObject() });
  } catch (err) {
    console.log("\n---");
    console.log("err: ", err);
    console.log("---\n");

    return res.status(500).send({ success: false });
  }
}

module.exports = { uploadMeme };