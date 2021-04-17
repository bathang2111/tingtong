import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import CancelCall from "../../../../assets/images/CancelCall.png";
import ReceiveCall from "../../../../assets/images/ReceiveCall.png";
import { CloseReceiveLobby, OpenReceiveLobby } from "../../jitsiSlide";
import { Redirect } from "react-router";
import { useEffect, useState } from "react";
import ReceiveTheCallRING from "../../../../assets/audio/ReceiveTheCall.mp3";
import { socketVideoCall } from "../../../../app/App.js";
const ReceiveCallLobby = (props) => {
  const dispatch = useDispatch();
  const { LobbyReceiveCallStatus } = useSelector((state) => state.jitsi);
  const [onCall, setOnCall] = useState(false);

  useEffect(() => {
    socketVideoCall.on("sendToReceiver", (data) => console.log(data));
  }, []);

  const LobbyClose = () => {
    dispatch(CloseReceiveLobby());
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
