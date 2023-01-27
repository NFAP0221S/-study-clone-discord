import jwt from "jsonwebtoken";
import { Socket } from "socket.io";

// socket에서 토큰 인증
export const verifyTokenSocket = (socket: any, next: any) => {
  const token = socket.handshake.auth?.token;
  // console.log(token);
  // console.log("TOKEN_KEY", "hereShouldGoStrongTokenKey");
  const TOKEN_KEY = process.env.TOKEN_KEY || "";
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    socket.user = decoded;
  } catch (err) {
    const socketError = new Error("NOT_AUTHORIZED");
    return next(socketError);
  }

  return next();
};
