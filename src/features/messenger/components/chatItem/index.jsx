import { useDispatch, useSelector } from "react-redux";
import { ToggleChatWindow, ToggleListChat } from "../../messageSlide";
import * as SC from "./style";

const ChatItem = (props) => {
  const { image } = useSelector((state) => state.userprofile);
  const dispatch=useDispatch();

  const toggleChatWindow=()=>{
    dispatch(ToggleChatWindow());
    dispatch(ToggleListChat());
  }

  return (
    <SC.Container onDoubleClick={toggleChatWindow} >
      <SC.Avatar src={image} />
      <SC.Pain>
        <SC.Name>Thang nguyen</SC.Name>
      </SC.Pain>
    </SC.Container>
  );
};

export default ChatItem;
