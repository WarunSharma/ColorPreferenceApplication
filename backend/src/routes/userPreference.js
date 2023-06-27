const express = require("express");
const router = express.Router();
const { createOrUpdateUserPreference, getUserPreference } = require('../controllers/userpreference');


router.get("/:username", getUserPreference);

router.post("/", createOrUpdateUserPreference);

module.exports = router;