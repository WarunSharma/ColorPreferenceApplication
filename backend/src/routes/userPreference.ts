import express from "express";
const router = express.Router();
const { createOrUpdateUserPreference, getUserPreference } = require('../controllers/userpreference.js');


router.get("/:username", getUserPreference);

router.post("/", createOrUpdateUserPreference);

module.exports = router;