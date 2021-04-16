import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import CancleIcon from "../../../../..//assets/images/CancelIcon.png";
import Arrow from "../../../../../assets/images/arrow.png";
// import { CloseChatWindow } from "../../../../messageSlide";
import { useRef, useState } from "react";
import "../../style.scss";
import { ClearChatContent, CloseChatWindow } from "../../../messageSlide";
import { socketChat } from "../../../../../app/App";
import { useEffect } from "react/cjs/react.development";

const MessageHeader = (props) => {
  const ArrowRef = useRef(null);
  const HeaderRef = useRef(null);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const { image } = useSelector((state) => state.userprofile);
  const { chatContent } = useSelector((state) => state.message);
  const { listChatTing } = useSelector((state) => state.message);

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
    socketChat.emit("leaveRoom", {
      event: "leaveRoom",
      room: chatContent.roomId,
    });
  };

  return (
    <SC.Container className="header" ref={HeaderRef}>
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
