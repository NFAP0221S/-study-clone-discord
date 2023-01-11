import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  // 토큰이 없으면 403에러
  if (!token) {
    return res.status(403).send("인증을 위한 토큰이 필요합니다.");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const TOKEN_KEY = process.env.TOKEN_KEY || "";
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("유효하지 않은 토큰");
  }

  return next();
};
