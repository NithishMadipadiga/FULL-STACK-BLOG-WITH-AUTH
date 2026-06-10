const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { title: "First Blog Post" },
    { title: "Second Blog Post" }
  ]);
});

module.exports = router;
