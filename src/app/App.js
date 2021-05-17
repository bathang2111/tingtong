import { Routes } from "../constants/routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReceiveCallLobby from "../features/jitsi/components/receiveCallLobby";
import FeedBack from "../features/feedBack";
import Calender from "../components/calender";
import ChatWindow from "../features/messenger/chatWindow";
import ListChat from "../features/messenger/listChat";
import SmallScreenMenu from "../components/header/components/smallScreenMenu";
import ListChatTing from "../features/messenger/chatWindow/components/listChating";
import MessageApi from "../api/messageApi";
import { useEffect, useState } from "react";
import {
  SocketContext,
  socketChat,
  socketVideoCall,
  socketTutor,
} from "../api/socketService";

function App() {
  const isLogin = useSelector((state) => state.login.checkLogin);
  const token = localStorage.getItem("token");
  const [tokenn, setToken] = useState();

  useEffect(() => {
    if (!token) return;
    setToken(token);
  }, [token]);

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
    <SocketContext.Provider
      value={
        tokenn
          ? {
              socketChat: socketChat(tokenn),
              socketVideoCall: socketVideoCall(token),
              socketTutor: socketTutor(token),
            }
          : null
      }
    >
      {isLogin ? "" : <Redirect to="/wellcome" />}
      {listPage()}
      {tokenn ? (
        <>
          <FeedBack />
          <ChatWindow />
          <ListChatTing />
          <ListChat />
          <Calender />
          <SmallScreenMenu />
          <ReceiveCallLobby />
          {/* <RequestCallLobby /> */}
        </>
      ) : null}
    </SocketContext.Provider>
  );
}

export default App;
