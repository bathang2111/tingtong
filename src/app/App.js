import { Routes } from "../constants/routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { OpenLobby } from "../features/jitsi/jitsiSlide";
import ReceiveCallLobby from "../features/jitsi/components/receiveCallLobby";
import RequestCallLobby from "../features/jitsi/components/requestCallLobby"
import FeedBack from "../features/feedBack/feedBack";

export const socket = io("localhost:5000", {
  transports: ["websocket", "polling", "flashsocket"],
});

function App() {
  const isLogin = useSelector((state) => state.login.checkLogin);
  const dispatch = useDispatch();

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
      {isLogin ? "" : <Redirect to="/" />}
      <FeedBack/>
      <ReceiveCallLobby />
      <RequestCallLobby/>
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
