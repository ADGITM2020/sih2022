const express = require("express");
const { getLinkedInScrapper } = require("../controller/scrapperController");
const router = express.Router();

router.route("/linkedIn").get(getLinkedInScrapper);

module.exports = router