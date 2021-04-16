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
    if (isOpenChatWindow && chatContent.roomId == props.info.room_id) {
      dispatch(ToggleListChat());
      return;
    }
    dispatch(OpenChatWindow());
    dispatch(ToggleListChat());
    const content = await dispatch(GetContentByRoomId(props.info.room_id)); // get all mesages in conversation
    const userChatTing = {
      id: props.info.room_id,
      name: props.info.username,
      avatar: props.info.avatar,
    };
    dispatch(setRoomId(userChatTing));
    socketChat.emit("joinRoom", {
      event: "joinRoom",
      room: props.info.room_id,
    }); // emit event join rôm

    //Save to list chatTing
    dispatch(
      PushChatTing({
        roomId: props.info.room_id,
        chatContent: unwrapResult(content),
        avatar: props.info.avatar,
        name: props.info.username,
        notification: 0,
      })
    );
  };

  return (
    <SC.Container onClick={toggleChatWindow}>
      <SC.Avatar src={image} />
      <SC.Pain>
        <SC.Name>{props.info.username}</SC.Name>
        <SC.LastMessage>
          {props.info.receiver_id == localStorage.getItem("idUser")
            ? "Bạn: "
            : props.info.username + ": "}
          {props.info.mes_content}
        </SC.LastMessage>
      </SC.Pain>
    </SC.Container>
  );
};

export default ChatItem;
