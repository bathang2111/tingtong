import { useSelector } from "react-redux";
import * as SC from "./style";

const ChatItem = (props) => {
  const { image } = useSelector((state) => state.userprofile);
  return (
    <>
      {props.content.senderId == localStorage.getItem("idUser") ? (
        <SC.ContainerRight>
          <SC.ChatItemRight>{props.content.mesContent}</SC.ChatItemRight>
        </SC.ContainerRight>
      ) : (
        <SC.ContainerLeft>
          <SC.Avatar src={image} />
          <SC.ChatItemLeft>{props.content.mesContent}</SC.ChatItemLeft>
        </SC.ContainerLeft>
      )}
    </>
  );
};

export default ChatItem;
