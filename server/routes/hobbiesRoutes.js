const express = require("express");
const router = express.Router();
const hobbiesController = require("../controllers/hobbiesController");

router.get("/", hobbiesController.getAll);

module.exports = router;
