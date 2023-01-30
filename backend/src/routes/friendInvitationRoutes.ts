import express, { Router, Request, Response } from "express";
import * as Joi from "joi";
import {
  ContainerTypes,
  // Use this as a replacement for express.Request
  ValidatedRequest,
  // Extend from this to define a valid schema type/interface
  ValidatedRequestSchema,
  // Creates a validator that generates middlewares
  createValidator,
} from "express-joi-validation";
import { verifyToken as auth } from "../middleware/auth";
import friendInvitationControllers from "../controllers/friendInvitation/friendInvitationControllers";

export const router: Router = express.Router();
const validator = createValidator();
const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
});

router.post(
  "/invite",
  auth,
  validator.body(postFriendInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);
