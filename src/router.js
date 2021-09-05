const router = require("express").Router();
const memeRoutes = require("./routes/memeRoutes");
const statsRoutes = require("./routes/statsRoutes");

router.get("/", (req, res) => res.send("<h1>Hello from meme-gallery-api</h1>"));

router.use("/memes", memeRoutes);
router.use("/stats", statsRoutes);

module.exports = router;