import { createContext } from "react";
import io from "socket.io-client";
import { SOCKET_URL } from "../constants/baseURl";

export const socketChat = (token) => {
  if (!token) return null;
  const socker = io(`${SOCKET_URL}/chat`, {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: token,
    },
  });
  return socker;
};

export const socketVideoCall = (token) => {
  if (!token) return null;
  const socker = io(`${SOCKET_URL}/video-call`, {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: token,
    },
  });
  return socker;
};

export const socketTutor = (token) => {
  if (!token) return null;
  const socker = io(`${SOCKET_URL}/tutor`, {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: token,
    },
  });
  return socker;
};

export const SocketContext = createContext();
