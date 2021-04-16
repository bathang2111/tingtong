import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import IconCancle from "../../../../assets/images/CancelCall.png";
import { CloseRequestLobby, CallerStatusTrue } from "../../jitsiSlide";
// import { socketTest } from "../../../../app/App";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Redirect } from "react-router";

const RequestCallLobby = (props) => {
  const { LobbyRequestCallStatus } = useSelector((state) => state.jitsi);
  const { InfoTutor } = useSelector((state) => state.jitsi);
  const dispatch = useDispatch();
  const [onCall, setOncall] = useState(false);

  useEffect(() => {
    if (LobbyRequestCallStatus) {
      // tạo cuộc gọi thoai
      // socketTest.emit("CreateTheCall", true);
      // bật trạng thái người gọi true
      dispatch(CallerStatusTrue());
    }
    //người nhận từ chối cuộc gọi
    // socketTest.on("CancleTheCalll", (data) => {
    //   dispatch(CloseRequestLobby());
    // });
  });

  useEffect(() => {
    setOncall(false);
    // lắng nghe sự kiện chấp nhận cuộc gọi
    // socketTest.on("AccessTheCalll", (data) => {
    //   dispatch(CloseRequestLobby());
    //   setOncall(true);
    // });
  });

  const onHandleClick = () => {
    // socketTest.emit("CreateTheCall", false);
    dispatch(CloseRequestLobby());
  };
  return (
    <>
      {onCall ? <Redirect to="/jitsi" /> : ""}
      <SC.Container
        isOpen={LobbyRequestCallStatus}
        style={{
          overlay: {
            background: "none",
            zIndex:10
          },
        }}
      >
        <SC.LocalVideo />
        <SC.Group>
          <SC.Avatar src={InfoTutor.avatar} />
          <SC.Name>{InfoTutor.name}</SC.Name>
          <SC.GrouButton>
            <SC.CancleButton onClick={onHandleClick}>
              <SC.Icon src={IconCancle} />
            </SC.CancleButton>
          </SC.GrouButton>
        </SC.Group>
      </SC.Container>
    </>
  );
};

export default RequestCallLobby;