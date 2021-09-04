const router = require("express").Router();

router.get("/", (req, res) => res.send("<h1>Hello from meme-gallery-api</h1>"));


module.exports = router;