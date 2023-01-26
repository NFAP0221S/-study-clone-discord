import { addNewConnectedUser as serverStore } from "../serverStore";

export const newConnectionHandler = async (socket: any, io: any) => {
  const userDetails = socket.user;

  serverStore({
    socketId: socket.id,
    userId: userDetails.userId,
  });
};
