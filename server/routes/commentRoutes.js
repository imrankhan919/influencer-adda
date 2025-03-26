const express = require("express");
const { getComments, addComment } = require("../controllers/commentContoller");

const router = express.Router({ mergeParams: true });

router.get("/", getComments);
router.post("/", addComment);

module.exports = router;
