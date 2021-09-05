const { uploadMeme, getMemes, getMemeById } = require("../controllers/memeController");

const router = require("express").Router();

router.get("/:id", getMemeById);

router.get("/", getMemes);

router.post("/", uploadMeme);

module.exports = router;