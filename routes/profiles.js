const express = require("express");
const router = express.Router();
const Profile = require("../models/profile");

// All Profiles
router.get("/", (req, res) => {
  res.render("profiles/index");
});

// New Profile Route

router.get("/new", (req, res) => {
  res.render("profiles/new", { profile: new Profile() });
});

// Create Profile Route

router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
