import * as SC from "./style";
import SendIcon from "../../../../../assets/images/SendIcon.png";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PushMessageContent,
  setNotification,
} from "../../../messageSlide";
import { useEffect } from "react";
import { SocketContext } from "../../../../../api/socketService";
import { useForm } from "react-hook-form";

const InputChat = (props) => {
  const dispatch = useDispatch();
  const [vale, setValue] = useState("");
  const { chatContent } = useSelector((state) => state.message);
  const { listChatTing } = useSelector((state) => state.message);
  const [message, setMessage] = useState({});
  const socket = useContext(SocketContext);
  const { handleSubmit } = useForm();
  const [isChatTing, setChatTing] = useState(false);

  useEffect(() => {
    socket.socketChat.on("msgToClient", (data) => {
      setMessage(data);
    });
  }, []);

  useEffect(() => {
    if (chatContent.roomId == "") return;
    if (message.senderId == localStorage.getItem("idUser")) return;
    if (message.roomId == chatContent.roomId) {
      const chatt = {
        senderId: message.senderId,
        mesContent: message.mesContent,
      };
      dispatch(PushMessageContent(chatt));
      return;
    } else {
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
    if (event.target.value != "") {
      if (isChatTing) return;
      socket.socketChat.emit("actionSender", {
        room: chatContent.roomId,
        receiver: [chatContent.receiver],
        action: 1,
      });
      setChatTing(true);
    } else {
      socket.socketChat.emit("actionSender", {
        room: chatContent.roomId,
        receiver: [chatContent.receiver],
        action: 2,
      });
      setChatTing(false);
    }
  };

  const onSubmit = () => {
    setChatTing(false);
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

  return (
    <SC.Container onSubmit={handleSubmit(onSubmit)}>
      <SC.ChatInput value={vale} onChange={onChange} placeholder="Aa" />
      <SC.BtnSend>
        <SC.ImageSend src={SendIcon} />
      </SC.BtnSend>
    </SC.Container>
  );
};

export default InputChat;
