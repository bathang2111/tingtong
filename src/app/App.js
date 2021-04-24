import { Routes } from "../constants/routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import ReceiveCallLobby from "../features/jitsi/components/receiveCallLobby";
import RequestCallLobby from "../features/jitsi/components/requestCallLobby";
import FeedBack from "../features/feedBack";
import Calender from "../components/calender";
import ChatWindow from "../features/messenger/chatWindow";
import ListChat from "../features/messenger/listChat";
import SmallScreenMenu from "../components/header/components/smallScreenMenu";
import ListChatTing from "../features/messenger/chatWindow/components/listChating";
import MessageApi from "../api/messageApi";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

export const socketChat = io("http://103.130.218.64:5003/chat", {
  // transports: ["websocket", "polling", "flashsocket"],
  query: {
    token: localStorage.getItem("token"),
  },
});

export const socketVideoCall = io("http://103.130.218.64:5003/video-call", {
  query: {
    token: localStorage.getItem("token"),
  },
});

export const socketTutor = io("http://103.130.218.64:5003/tutor", {
  // transports: ["websocket", "polling", "flashsocket"],
  query: {
    token: localStorage.getItem("token"),
  },
});

function App() {
  const isLogin = useSelector((state) => state.login.checkLogin);

  const listPage = () => {
    if (Routes) {
      const result = Routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
      return <Switch>{result}</Switch>;
    }
    return;
  };

  return (
    <>
      {isLogin ? "" : <Redirect to="/wellcome" />}
      <FeedBack />
      <ChatWindow />
      <ListChatTing />
      <ListChat />
      <Calender />
      <SmallScreenMenu />
      <ReceiveCallLobby />
      <RequestCallLobby />
      {listPage()}
    </>
  );
}

export default App;
