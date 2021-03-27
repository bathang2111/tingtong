import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import CancleIcon from "../../../../../../assets/images/CancelIcon.png";
import Arrow from "../../../../../../assets/images/arrow.png";
import { ToggleChatWindow } from "../../../../messageSlide";
import { useRef, useState } from "react";
import "../../style.scss";

const MessageHeader = (props) => {
  const ArrowRef = useRef(null);
  const HeaderRef = useRef(null);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const {image} =useSelector(state=>state.userprofile);

  const onHandleclick = () => {
    HeaderRef.current.classList.toggle("changeBackground");
    ArrowRef.current.classList.toggle("rotate");
    setCheck(!check);
    props.toggleChat(check);
  };

  return (
    <SC.Container className="header" ref={HeaderRef}>
      <SC.Avatar src={image} />
      <SC.Pain>
        <SC.ArrowBtn
          className="arrow"
          src={Arrow}
          ref={ArrowRef}
          onClick={onHandleclick}
        />
        <SC.Cancle
          onClick={() => dispatch(ToggleChatWindow())}
          src={CancleIcon}
        />
      </SC.Pain>
    </SC.Container>
  );
};

export default MessageHeader;
