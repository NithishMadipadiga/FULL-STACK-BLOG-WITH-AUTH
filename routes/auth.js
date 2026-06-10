const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "User Registered" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login Successful" });
});

module.exports = router;
