const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("this is about page");
});

module.exports = router;
