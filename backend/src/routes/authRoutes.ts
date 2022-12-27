import express, { Router } from "express";

const router: Router = express.Router();

router.post(".register", (req, res) => {
  res.send("register route");
});

router.post("/login", (req, res) => {
  res.send("login route");
});

module.exports = router;
