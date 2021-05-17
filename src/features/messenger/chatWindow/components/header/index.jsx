import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import CancleIcon from "../../../../..//assets/images/CancelIcon.png";
import Arrow from "../../../../../assets/images/arrow.png";
import { useContext, useRef, useState } from "react";
import "../../style.scss";
import { ClearChatContent, CloseChatWindow } from "../../../messageSlide";
import { useEffect } from "react";
import { SocketContext } from "../../../../../api/socketService";

const MessageHeader = (props) => {
  const ArrowRef = useRef(null);
  const HeaderRef = useRef(null);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const { image } = useSelector((state) => state.userprofile);
  const { chatContent } = useSelector((state) => state.message);
  const { listChatTing } = useSelector((state) => state.message);
  const socket = useContext(SocketContext);

  const onHandleclick = () => {
    HeaderRef.current.classList.toggle("changeBackground");
    ArrowRef.current.classList.toggle("rotate");
    setCheck(!check);
    props.toggleChat(check);
  };

  const onHandleClickCancel = () => {
    dispatch(ClearChatContent());
    if (listChatTing.length <= 1) {
      dispatch(CloseChatWindow());
    }
    socket.socketChat.emit("leaveRoom", {
      event: "leaveRoom",
      room: chatContent.roomId,
    });
  };

  return (
    <SC.Container className="header" onClick={onHandleclick} ref={HeaderRef}>
      <SC.Avatar src={chatContent.avatar || image} />
      <SC.Name>{chatContent.name}</SC.Name>
      <SC.Pain>
        <SC.ArrowBtn
          className="arrow"
          src={Arrow}
          ref={ArrowRef}
          onClick={onHandleclick}
        />
        <SC.Cancle onClick={onHandleClickCancel} src={CancleIcon} />
      </SC.Pain>
    </SC.Container>
  );
};

export default MessageHeader;
