const router = require("express").Router();
const { getUploadStatistics } = require("../controllers/statsController");

router.get("/", getUploadStatistics);

module.exports = router;