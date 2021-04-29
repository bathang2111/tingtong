import { createContext } from "react";
import io from "socket.io-client";

export const socketChat = (token) => {
  if (!token) return null;
  const socker = io("http://103.130.218.64:5003/chat", {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: token,
    },
  });
  return socker;
};

export const socketVideoCall = (token) => {
  if (!token) return null;
  const socker = io("http://103.130.218.64:5003/video-call", {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: token,
    },
  });
  return socker;
};

export const socketTutor = (token) => {
  if (!token) return null;
  const socker = io("http://103.130.218.64:5003/tutor", {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: token,
    },
  });
  return socker;
};

export const SocketContext = createContext();
