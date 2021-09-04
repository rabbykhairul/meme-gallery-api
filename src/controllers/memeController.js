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

const getMemes = async (req, res) => {
  const memes = await Memes.aggregate([
    { $match: {} },
    { $sort: { createdAt: 1 } },
    { $project: { _id: 1 } },
    { 
      $group: {
        _id: null,
        ids: { $push: "$_id" }
      }
    }
  ]);

  console.log("\n---");
  console.log("memes: ", memes);
  console.log("---\n");

  return res.json({ success: true, memes: memes[0].ids });
}

module.exports = { uploadMeme, getMemes };