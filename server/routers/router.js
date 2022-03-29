const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    .send("connected");
});

module.exports = router;
