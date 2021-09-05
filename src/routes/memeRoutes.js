const { uploadMeme, getMemes, getMemeById, deleteMemeById } = require("../controllers/memeController");

const router = require("express").Router();

router.get("/:id", getMemeById);

router.delete("/:id", deleteMemeById);

router.get("/", getMemes);

router.post("/", uploadMeme);


module.exports = router;