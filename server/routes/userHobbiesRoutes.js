const express = require("express");
const router = express.Router();
const userHobbies = require("../controllers/userHobbiesController");

router.get("/", userHobbies.getAll);

module.exports = router;
