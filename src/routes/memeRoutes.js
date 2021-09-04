const { uploadMeme } = require("../controllers/memeController");

const router = require("express").Router();

router.post("/", uploadMeme);

module.exports = router;