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
  const [roomInfo, setRoom] = useState();

  //THÔNG BÁO KHI CÓ CUỘC GỌI ĐẾN
  useEffect(() => {
    socketVideoCall.on("sendToReceiver", (data) => {
      if (data.action == 1) {
        dispatch(OpenReceiveLobby());
        setRoom(data);
      } else {
        dispatch(CloseReceiveLobby());
      }
    });
  }, []);

  //TỪ CHỐI CUỘC GỌI
  const onCancleTheCall = () => {
    socketVideoCall.emit("receiver", {
      event: "receiver",
      room: roomInfo.room,
      caller: roomInfo.caller,
      action: 2,
    });
    dispatch(CloseReceiveLobby());
  };

  //CHẤP NHẬN CUỘC GỌI
  const onAccept = () => {
    setOnCall(true);
    socketVideoCall.emit("receiver", {
      event: "receiver",
      room: roomInfo.room,
      caller: roomInfo.caller,
      action: 1,
    });
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
          <SC.CancelCallBtn onClick={onCancleTheCall}>
            <SC.Icon src={CancelCall} />
          </SC.CancelCallBtn>
          <SC.ReceiveCallBtn onClick={onAccept}>
            <SC.Icon src={ReceiveCall} />
          </SC.ReceiveCallBtn>
        </SC.Groupbtn>
      </SC.Container>
    </>
  );
};

export default ReceiveCallLobby;
