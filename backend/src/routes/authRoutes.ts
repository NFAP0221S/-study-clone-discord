import express, { Router } from "express";
import authControllers from "../controllers/auth/authControllers";

// const authControllers = require("../controllers/auth/authControllers");

const router: Router = express.Router();

router.post("/register", authControllers.controllers.postRegister);

router.post("/login", authControllers.controllers.postLogin);

module.exports = router;
