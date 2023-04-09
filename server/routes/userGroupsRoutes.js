const express = require("express");
const router = express.Router();
const userGroups = require("../controllers/userGroupsController");

router.get("/:group_id", userGroups.getAll);

module.exports = router;
