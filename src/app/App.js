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

// export const socketTest = io("localhost:5000", {
//   transports: ["websocket", "polling", "flashsocket"],
// });

function App() {
  const isLogin = useSelector((state) => state.login.checkLogin);

  // useEffect(async () => {
  //   const body = {
  //     roomName: "aaaaaaaaa",
  //     roomType: 1,
  //     memberRoom: [
  //       {
  //         userID: "117616253337605123",
  //       },
  //       {
  //         userID: "112123308933125150",
  //       },
  //     ],
  //   };

  //   const room = await MessageApi.CreateRoom(body);
  //   socketChat.emit("joinRoom", { event: "joinRoom", room: room.data.id }); // emit event join rôm
  //   socketChat.emit("msgToServer", {
  //     event: "msgToServer",
  //     room: room.data.id,
  //     mes_content: "di choi a e oi",
  //     mes_type: 1,
  //   });
  // });

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

// const App = (props) => {
//   const [displayName, setDisplayName] = useState("");
//   const [roomName, setRoomName] = useState("");
//   const [password, setPassword] = useState("");
//   const [onCall, setOnCall] = useState(true);

//   const createVideoCall = (_) => {
//     console.log("displayName: ", displayName);
//     console.log("roomName: ", roomName);
//     console.log("password: ", password);
//     setOnCall(false);
//   };

//   const logOut = (_) => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   const listPage = () => {
//     if (Routes) {
//       const result = Routes.map((route) => {
//         return (
//           <Route
//             key={route.path}
//             path={route.path}
//             exact={route.exact}
//             component={route.main}
//           />
//         );
//       });
//       return <Switch>{result}</Switch>;
//     }
//     return;
//   };

//   return <Router>{listPage()}</Router>;
// };

// export default App;

// //   <Provider store={store}>
// //   <Router>
// //   <Switch>
// //     <Route path="/login">
// //       {localStorage.getItem("idUser") ? <Redirect to="/jitsi"></Redirect> : <LogIn></LogIn>}
// //     </Route>
// //     <Route path="/text" component={HomePage}></Route>
// //     <Route path="/jitsi">
// //       {onCall ? (<><h2>Create your Meeting</h2>
// //         <input type='text' placeholder='Room name' value={roomName} onChange={(e => setRoomName(e.target.value))} />
// //         <input type='text' placeholder='Your name' value={displayName} onChange={(e => setDisplayName(e.target.value))} />
// //         <input type='text' placeholder='Password' value={password} onChange={(e => setPassword(e.target.value))} />
// //         <button type='submit' onClick={createVideoCall}> let start </button>
// //         <button onClick={logOut}>Log Out</button>
// //       </>) : (<Jitsi roomName={roomName} displayName={displayName}></Jitsi>)}
// //     </Route>

// //     <CallVideo></CallVideo>
// //   </Switch>
// // </Router>
// // // </Provider>
