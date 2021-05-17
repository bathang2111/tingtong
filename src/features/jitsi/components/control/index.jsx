import * as SC from "./style";
import CancleIcon from "../../../../assets/images/CancelCall.png";
import CloseMicIcon from "../../../../assets/images/IconCloseMicro.png";
import CloseCamIcon from "../../../../assets/images/IconCloseCamera.png";
import ScreenIcon from "../../../../assets/images/IconShareScrenn.png";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCamera, ToggleMicro, ToggleShareScreen } from "../../jitsiSlide";
import { useEffect, useState } from "react";

const ControlTheCall = (props) => {
  const dispatch = useDispatch();
  const { camStatus } = useSelector((state) => state.jitsi);
  const { micStatus } = useSelector((state) => state.jitsi);
  const { socket } = props;
  const aboutMe =
    localStorage.getItem("idUser") == props.receiverId ? "receiver" : "caller";

  const alertUser = (event) => {
    if (aboutMe == "caller") {
      socket.emit("caller", {
        event: "caller",
        room: props.roomId,
        receiver: props.receiverId,
        action: 2,
      });
      localStorage.removeItem("receiverId");
    } else {
      socket.emit("receiver", {
        event: "receiver",
        room: props.roomId,
        caller: props.callerId,
        action: 2,
      });
    }
    window.close();
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  });

  const cancleTheCall = () => {
    if (aboutMe == "caller") {
      socket.emit("caller", {
        event: "caller",
        room: props.roomId,
        receiver: props.receiverId,
        action: 2,
      });
    } else {
      socket.emit("receiver", {
        event: "receiver",
        room: props.roomId,
        caller: props.callerId,
        action: 2,
      });
    }
    window.close();
  };

  return (
    <SC.Container>
      <SC.ShareScreen onClick={() => dispatch(ToggleShareScreen())}>
        <SC.ScrennIcon src={ScreenIcon} />
      </SC.ShareScreen>
      <SC.GroupControl>
        <SC.CloseBtn
          style={
            camStatus
              ? { background: "none" }
              : { background: "rgba(255,255,255,0.4)" }
          }
          onClick={() => dispatch(ToggleCamera())}
        >
          <SC.Icon src={CloseCamIcon} />
        </SC.CloseBtn>
        <SC.CancleButton onClick={cancleTheCall}>
          <SC.Icon src={CancleIcon} />
        </SC.CancleButton>
        <SC.CloseBtn
          style={
            micStatus
              ? { background: "none" }
              : { background: "rgba(255,255,255,0.4)" }
          }
          onClick={() => dispatch(ToggleMicro())}
        >
          <SC.Icon src={CloseMicIcon} />
        </SC.CloseBtn>
      </SC.GroupControl>
    </SC.Container>
  );
};

export default ControlTheCall;
