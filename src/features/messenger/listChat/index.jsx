import * as SC from "./style";
import ChatItem from "./components/chatItem";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
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
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  title: {
    width: "100%",
    fontSize: 24,
    margin: 0,
    padding: "10px 10px 0",
  },
}));

const ListChat = (props) => {
  const classes = useStyles();
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
      console.log(data);
      toast("Bạn có tin nhắn mới", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
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
        <Typography variant="h3" className={classes.title}>
          Tin nhắn
        </Typography>
        <SearchMessage />
        <SC.ListMessage>{showChatList()}</SC.ListMessage>
      </SC.Container>
    </>
  );
};

export default ListChat;
