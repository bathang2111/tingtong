import { useDispatch, useSelector } from "react-redux";
import {
  GetContentByRoomId,
  OpenChatWindow,
  PushChatTing,
  ToggleListChat,
  setRoomId,
} from "../../../messageSlide";
import * as SC from "./style";
import { socketChat } from "../../../../../app/App";
import { unwrapResult } from "@reduxjs/toolkit";

const ChatItem = (props) => {
  const { image } = useSelector((state) => state.userprofile);
  const { isOpenChatWindow } = useSelector((state) => state.message);
  const { chatContent } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const toggleChatWindow = async () => {
    if (isOpenChatWindow && chatContent.roomId == props.info.roomId) {
      dispatch(ToggleListChat());
      return;
    }
    dispatch(OpenChatWindow());
    dispatch(ToggleListChat());
    const content = await dispatch(GetContentByRoomId(props.info.roomId)); // get all mesages in conversation
    dispatch(setRoomId(props.info.roomId));
    socketChat.emit("joinRoom", { event: "joinRoom", room: props.info.roomId }); // emit event join rôm

    //Save to list chatTing
    dispatch(
      PushChatTing({
        roomId: props.info.roomId,
        chatContent: unwrapResult(content),
        notification: 0,
      })
    );
  };

  return (
    <SC.Container onClick={toggleChatWindow}>
      <SC.Avatar src={image} />
      <SC.Pain>
        <SC.Name>{props.info.messages.senderId}</SC.Name>
        <SC.LastMessage>
          {props.info.messages.senderId == localStorage.getItem("idUser")
            ? "Bạn: "
            : "Other: "}
          {props.info.messages.mesContent}
        </SC.LastMessage>
      </SC.Pain>
    </SC.Container>
  );
};

export default ChatItem;
