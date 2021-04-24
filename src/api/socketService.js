export const SocketService = () => {
  const socketChat = io("http://103.130.218.64:5003/chat", {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: localStorage.getItem("token"),
    },
  });

  const socketVideoCall = io("http://103.130.218.64:5003/video-call", {
    query: {
      token: localStorage.getItem("token"),
    },
  });

  const socketTutor = io("http://103.130.218.64:5003/tutor", {
    // transports: ["websocket", "polling", "flashsocket"],
    query: {
      token: localStorage.getItem("token"),
    },
  });
};
