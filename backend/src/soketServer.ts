import { Server } from "socket.io";
import http from "http";
import { verifyTokenSocket as authSocket } from "./middleware/authSocket";
import { newConnectionHandler as newConnectionUser } from "./socketHandlers/newConnectionUser";

export const registerSocketServer = (
  server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("socketServer: user connected");
    console.log(socket.id);
    newConnectionUser(socket, io);
    // new connection handler
  });
};

// registerSocketServer.listen(3000);
