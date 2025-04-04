const express = require("express");
const { getComments, addComment } = require("../controllers/commentContoller");
const protect = require("../middleware/authMiddleware");

const router = express.Router({ mergeParams: true });

router.get("/", protect, getComments);
router.post("/", protect, addComment);

module.exports = router;
