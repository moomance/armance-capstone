const express = require("express");
const router = express.Router();
const groupsController = require("../controllers/groupsController");
// const userGroupsController = require("../controllers/userGroupsController");

// router.get("/", groupsController.getAll);

router.get("/", groupsController.getAll);
router.get("/:id", groupsController.getSingle);

module.exports = router;
