import * as SC from "./style";
import ChatItem from "./components/chatItem";
import { useDispatch, useSelector } from "react-redux";
import { GetRoomHistories, ToggleListChat } from "../messageSlide";
import { useEffect } from "react/cjs/react.development";
import { socketChat } from "../../../app/App";

const ListChat = (props) => {
  const { roomHistories } = useSelector((state) => state.message);
  const { isOpen } = useSelector((state) => state.message);
  const { isOpenChatWindow } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!isOpen) return;
    await dispatch(GetRoomHistories());
  }, [isOpen]);

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
      <SC.ListMessage>{showChatList()}</SC.ListMessage>
    </SC.Container>
  );
};

export default ListChat;