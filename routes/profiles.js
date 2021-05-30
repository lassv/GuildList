const express = require("express");
const router = express.Router();

// All Profiles
router.get("/", (req, res) => {
  res.render("profiles/index");
});

// New Profile Route

router.get("/new", (req, res) => {
  res.render("profiles/new");
});

// Create Profile Route

router.get("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
