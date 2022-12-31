import express, { Router } from "express";
import authControllers from "../controllers/auth/authControllers";
import Joi from "joi";

const validator = require("express-joi-validation").createValidator({});
const router: Router = express.Router();

// 유효성 검사
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12),
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);
router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

module.exports = router;
