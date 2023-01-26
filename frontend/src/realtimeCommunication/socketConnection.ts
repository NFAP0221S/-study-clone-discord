import io from "socket.io-client";

let socket: any = null;

export const connectWithSocketServer = () => {
  socket = io("http://localhost:5002");

  socket.on("connect", () => {
    console.log("socketClient: succesfully connected with socket.io server");
    console.log(socket.id);
  });
};
