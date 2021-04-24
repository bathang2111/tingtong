import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeConversation,
} from "../../../messageSlide";

const ListChatTing = (props) => {
  const { isOpenChatWindow } = useSelector((state) => state.message);
  const { listChatTing } = useSelector((state) => state.message);
  const { chatContent } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onHandeClick = (item, index) => {
    if (item.roomId == chatContent.roomId) {
      return;
    } else {
      dispatch(ChangeConversation(index));
    }
  };

  const showListChatTing = () => {
    const Result = listChatTing.map((item, index) => {
      return (
        <SC.Item>
          <SC.BtnAvatar
            style={
              item.roomId == chatContent.roomId
                ? { border: "2px solid #1771E6" }
                : { border: "none" }
            }
            onClick={() => onHandeClick(item, index)}
          ><SC.Image src={item.avatar||null}/>
            {item.notification > 0 ? (
              <SC.Noti>{item.notification}</SC.Noti>
            ) : (
              ""
            )}
          </SC.BtnAvatar>
        </SC.Item>
      );
    });
    return Result;
  };

  return (
    <>
      {isOpenChatWindow ? (
        <SC.Container>{showListChatTing()}</SC.Container>
      ) : null}
    </>
  );
};

export default ListChatTing;
