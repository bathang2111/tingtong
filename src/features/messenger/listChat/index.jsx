import * as SC from "./style";
import ChatItem from "./components/chatItem";
import { useDispatch, useSelector } from "react-redux";
import {
  GetRoomHistories,
  setNotificationInList,
  ToggleListChat,
} from "../messageSlide";
import { useContext, useEffect, useState } from "react";
// import { socketChat } from "../../../app/App";
import SearchMessage from "./components/search";
import RingMessage from "../../../assets/audio/ringChat.mp3";
import { SocketContext } from "../../../api/socketService";

const ListChat = (props) => {
  const { roomHistories } = useSelector((state) => state.message);
  const { isOpen } = useSelector((state) => state.message);
  const audio = new Audio(RingMessage);
  const dispatch = useDispatch();
  const socker = useContext(SocketContext);
  const socket = socker.socketChat;
  useEffect(() => {
    socket.on("msgToClient", async (data) => {
      if (!isOpen) return;
      await dispatch(GetRoomHistories());
    });
  }, []);

  useEffect(async () => {
    if (!isOpen) return;
    await dispatch(GetRoomHistories());
  }, [isOpen]);

  // CẬP NHẬT ROOM HISTORIES
  useEffect(() => {
    socket.on("update-room-histories", async (data) => {
      dispatch(setNotificationInList());
      audio.currentTime = 0;
      audio.play();
      await dispatch(GetRoomHistories());
    });
  }, []);

  const showChatList = () => {
    if (Object.keys(roomHistories).length == 0) {
      return;
    }
    const result = roomHistories.list.map((item) => {
      // console.log(item);
      return <ChatItem info={item} />;
    });
    return result;
  };

  return (
    <SC.Container
      isOpen={isOpen}
      onRequestClose={() => dispatch(ToggleListChat())}
      style={{
        overlay: {
          background: "none",
          zIndex: 10,
        },
      }}
    >
      <SC.Title>Message</SC.Title>
      <SearchMessage />
      <SC.ListMessage>{showChatList()}</SC.ListMessage>
    </SC.Container>
  );
};

export default ListChat;
