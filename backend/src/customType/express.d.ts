import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: string | jwt.JwtPayload;
      // user?: string | jwt.JwtPayload;
    }
  }
}

export {};
