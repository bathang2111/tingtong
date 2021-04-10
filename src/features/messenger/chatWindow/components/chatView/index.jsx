import * as SC from "./style";
import ChatItem from "../chatItem";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { socketChat } from "../../../../../app/App";
import { PushMessageContent, setNotification } from "../../../messageSlide";

const ChatView = (props) => {
  const { chatContent } = useSelector((state) => state.message);
  const viewRef = useRef(null);

  useEffect(() => {
    viewRef.current.scrollIntoView();
  }, [chatContent.roomId]);

  useEffect(() => {
    viewRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [chatContent.content]);

  const showListChat = () => {
    if (Object.keys(chatContent.content).length == 0) return;
    const result = chatContent.content.list.map((chat) => {
      return <ChatItem content={chat} />;
    });
    return result;
  };
  return (
    <SC.Container>
      {showListChat()} <div ref={viewRef}></div>
    </SC.Container>
  );
};

export default ChatView;
