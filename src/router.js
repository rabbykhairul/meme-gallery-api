const router = require("express").Router();
const memeRoutes = require("./routes/memeRoutes");

router.get("/", (req, res) => res.send("<h1>Hello from meme-gallery-api</h1>"));

router.use("/memes", memeRoutes);

module.exports = router;