import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import CancelCall from "../../../../assets/images/CancelCall.png";
import ReceiveCall from "../../../../assets/images/ReceiveCall.png";
import { CloseReceiveLobby, OpenReceiveLobby } from "../../jitsiSlide";
import { Redirect } from "react-router";
import { useEffect, useState } from "react";
import ReceiveTheCallRING from "../../../../assets/audio/ReceiveTheCall.mp3";
// import { socketTest } from "../../../../app/App.js";
const ReceiveCallLobby = (props) => {
  const [onCall, setOnCall] = useState(false);
  const dispatch = useDispatch();
  const { LobbyReceiveCallStatus } = useSelector((state) => state.jitsi);

  useEffect(() => {
    setOnCall(false);
    // socketTest.on("CreateTheCalll", (data) => {
    //   if (data) {
    //     dispatch(OpenReceiveLobby());
    //   } else {
    //     dispatch(CloseReceiveLobby());
    //   }
    // });
  });

  const LobbyClose = () => {
    dispatch(CloseReceiveLobby());
    // socketTest.emit("CancleTheCall", false);
  };

  const CallVideo = () => {
    setOnCall(true);
    // socketTest.emit("AccessTheCall", true);
    dispatch(CloseReceiveLobby());
  };

  return (
    <>
      {onCall ? <Redirect to="/jitsi" /> : ""}
      <SC.Container
        isOpen={LobbyReceiveCallStatus}
        style={{
          overlay: {
            background: "none",
          },
        }}
      >
        <audio src={ReceiveTheCallRING} autoPlay />
        <SC.Avatar />
        <SC.Groupbtn>
          <SC.CancelCallBtn onClick={LobbyClose}>
            <SC.Icon src={CancelCall} />
          </SC.CancelCallBtn>
          <SC.ReceiveCallBtn onClick={CallVideo}>
            <SC.Icon src={ReceiveCall} />
          </SC.ReceiveCallBtn>
        </SC.Groupbtn>
      </SC.Container>
    </>
  );
};

export default ReceiveCallLobby;
