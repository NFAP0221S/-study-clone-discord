import io from "socket.io-client";

interface TokenProps {
  email: string;
  token: string;
  username: string;
}

let socket: any = null;

export const connectWithSocketServer = (userDetails: TokenProps): void => {
  console.log("fe socketServer: ", userDetails);
  const jwtToken = userDetails.token;

  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("socketClient: succesfully connected with socket.io server");
    console.log(socket.id);
  });
};
