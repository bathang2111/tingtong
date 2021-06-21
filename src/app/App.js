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
import CourseDetailPage from ".././features/listCourses/components/courseDetailPage";
import MessageApi from "../api/messageApi";
import { useEffect, useState } from "react";
import {
  SocketContext,
  socketChat,
  socketVideoCall,
  socketTutor,
} from "../api/socketService";
import AuthApi from "../api/authApi";

function App() {
  const isLogin = useSelector((state) => state.login.checkLogin);
  const token = localStorage.getItem("token");
  const [tokenn, setToken] = useState();

  const url = window.location.pathname;
  useEffect(() => {
    if (!token) return;
    setToken(token);
  }, [token]);

  // useEffect(async () => {
  //   await AuthApi.getUserInfo();
  // }, []);

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

  const checkPage = () => {
    if (isLogin) {
      return;
    } else {
      if (url.indexOf("/courses/") != -1) {
        return <Redirect to={url} />;
      } else {
        return <Redirect to="/wellcome" />;
      }
    }
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
      {checkPage()}
      {/* {isLogin ? "" : <Redirect to="/wellcome" />} */}
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
