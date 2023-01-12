import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: any;
      // user?: string | jwt.JwtPayload;
    }
  }
}

export {};
