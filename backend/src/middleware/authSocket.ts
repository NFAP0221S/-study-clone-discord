import jwt from "jsonwebtoken";
import { Socket } from "socket.io";
const TOKEN_KEY = process.env.TOKEN_KEY || "";

// socket에서 토큰 인증
export const verifyTokenSocket = (socket: any, next: any) => {
  const token = socket.handshake.auth?.token;

  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    socket.user = decoded;
  } catch (err) {
    const socketError = new Error("NOT_AUTHORIZED");
    return next(socketError);
  }

  return next();
};
