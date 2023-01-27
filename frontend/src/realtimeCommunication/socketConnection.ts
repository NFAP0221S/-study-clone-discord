import io from "socket.io-client";

interface TokenProps {
  email: string;
  token: string;
  username: string;
}

let socket: any = null;

export const connectWithSocketServer = (userDetails: any): void => {
  const jwtToken = userDetails.userDetails.token;
  console.log("fe socketServer: ", userDetails);
  // console.log("userDetails TEST: ", userDetails.token);
  // console.log("userDetails TEST2: ", jwtToken.username);

  console.log(userDetails.userDetails.token);

  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
      // token:
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2QwZjliZTJlYmJjNTIxYjVmNjlkMjkiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2NzQ3ODY0NjIsImV4cCI6MTY3NDg3Mjg2Mn0.k1b-R8sixisPA3dPuaFRoYkrmnoLo7u0xyNON9r_Bzk",
    },
  });

  socket.on("connect", () => {
    console.log("socketClient: succesfully connected with socket.io server");
    console.log("socket", socket);
  });
};
