import * as SC from "./style";
import SendIcon from "../../../../../assets/images/SendIcon.png";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseIsChatTing,
  OpenIsChatTing,
  PushMessageContent,
  setNotification,
} from "../../../messageSlide";
import { useEffect } from "react";
import { SocketContext } from "../../../../../api/socketService";

const InputChat = (props) => {
  const dispatch = useDispatch();
  const [vale, setValue] = useState("");
  const { chatContent } = useSelector((state) => state.message);
  const { listChatTing } = useSelector((state) => state.message);
  const [message, setMessage] = useState({});
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.socketChat.on("msgToClient", (data) => {
      setMessage(data);
    });
  }, []);

  useEffect(() => {
    if (chatContent.roomId == "") return;
    if (message.senderId == localStorage.getItem("idUser")) return;
    if (message.roomId == chatContent.roomId) {
      console.log("trung r");
      const chatt = {
        senderId: message.senderId,
        mesContent: message.mesContent,
      };
      dispatch(PushMessageContent(chatt));
      return;
    } else {
      console.log("k trung  ");
      listChatTing.forEach((item) => {
        if (item.roomId == message.roomId) {
          const chatt = {
            senderId: message.senderId,
            mesContent: message.mesContent,
          };
          const payload = { id: item.roomId, content: chatt };
          dispatch(setNotification(payload));
          return;
        }
      });
    }
  }, [message]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const EventForm = (e) => {
    e.preventDefault();
    if (!vale) return;
    const chatt = {
      senderId: localStorage.getItem("idUser"),
      mesContent: vale,
    };
    dispatch(PushMessageContent(chatt));
    //send message
    socket.socketChat.emit("msgToServer", {
      event: "msgToServer",
      room: chatContent.roomId,
      mes_content: vale,
      mes_type: 1,
      receiver: [chatContent.receiver],
    });
    setValue("");
  };

  const onHandleSubmit = (e) => {
    EventForm(e);
  };
  const onEnterSubmit = (e) => {
    if (e.key !== "Enter") return;
    else {
      EventForm(e);
    }
  };

  return (
    <SC.Container onKeyDown={onEnterSubmit} onSubmit={onHandleSubmit}>
      <SC.ChatInput value={vale} onChange={onChange} placeholder="Aa" />
      <SC.BtnSend>
        <SC.ImageSend src={SendIcon} />
      </SC.BtnSend>
    </SC.Container>
  );
};

export default InputChat;
