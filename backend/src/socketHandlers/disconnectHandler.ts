import {
  addNewConnectedUser as serverStore,
  removeConnectedUser,
} from "../serverStore";

export const disconnectHandler = (socket: any) => {
  removeConnectedUser(socket.id);
};
