// Map은 key가 있는 데이터를 저장
const connectedUsers = new Map();

interface SocketProps {
  socketId: string;
  userId: string;
}

// key, value 형태로 저장(set)
export const addNewConnectedUser = ({ socketId, userId }: SocketProps) => {
  connectedUsers.set(socketId, { userId });
  console.log("Server Store: 새 유저가 연결됨");
  console.log(connectedUsers);
};

export const removeConnectedUser = (socketId: string) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log("Server Store: 새 유저가 연결됨");
    console.log(connectedUsers);
  }
};
