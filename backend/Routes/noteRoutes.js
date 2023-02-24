const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require("../Controller/noteController");

const { protect } = require("../middleware/authMiddlewear");

router.route("/").get(protect, getNotes).post(protect, addNote);

module.exports = router;
