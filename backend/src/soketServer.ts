// import { createServer } from "http";
import { Server } from "socket.io";
// import { server } from "./server";

export const registerSocketServer = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("socketServer: user connected");
    console.log(socket.id);
  });
};

// registerSocketServer.listen(3000);
