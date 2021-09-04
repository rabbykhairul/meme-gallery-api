const { uploadMeme, getMemes } = require("../controllers/memeController");

const router = require("express").Router();

router.get("/", getMemes);

router.post("/", uploadMeme);

module.exports = router;