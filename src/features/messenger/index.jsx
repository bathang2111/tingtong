import * as SC from "./style";
import ChatItem from "./components/chatItem";
import { useDispatch, useSelector } from "react-redux";
import { ToggleListChat } from "./messageSlide";

const Message = (props) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { isOpen } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const showChatList = () => {
    const result = a.map((item) => {
      console.log(item);
      return <ChatItem />;
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
      <SC.ListMessage>{showChatList()}</SC.ListMessage>
    </SC.Container>
  );
};

export default Message;
