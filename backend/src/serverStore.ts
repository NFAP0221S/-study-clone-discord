// Map은 key가 있는 데이터를 저장
const connectedUsers = new Map();

interface SocketProps {
  socketId: any;
  userId: any;
}

// key, value 형태로 저장(set)
export const addNewConnectedUser = ({ socketId, userId }: SocketProps) => {
  connectedUsers.set(socketId, { userId });
  console.log("Server Store: 새 유저가 연결됨");
  console.log(connectedUsers);
};
