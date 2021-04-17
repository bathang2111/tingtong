import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import IconCancle from "../../../../assets/images/CancelCall.png";
import { CloseRequestLobby, CallerStatusTrue } from "../../jitsiSlide";
import { socketVideoCall } from "../../../../app/App";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Redirect } from "react-router";
import CallVideoApi from "../../../../api/callVideoApi";

const RequestCallLobby = (props) => {
  const { LobbyRequestCallStatus } = useSelector((state) => state.jitsi);
  const { InfoTutor } = useSelector((state) => state.jitsi);
  const dispatch = useDispatch();
  const [onCall, setOncall] = useState(false);
  const [dataSender, setData] = useState({
    event: "caller",
    room: "",
    receiver: "",
    action: 0,
  });

  useEffect(async () => {
    if (LobbyRequestCallStatus) {
      //call api create room;
      try {
        const response = await CallVideoApi.RequestCallVideo(InfoTutor.id);
        console.log(response.videoRoom);
        setData({
          event: "caller",
          room: response.videoRoom.id,
          receiver: InfoTutor,
          action: 1,
        });
      } catch (error) {
        console.log(error);
      }
      // setTimeout(() => {
      //   alert("Người nhận không bat may");
      //   dispatch(CloseRequestLobby());
      // }, 10000);
      dispatch(CallerStatusTrue());
    }
  }, [LobbyRequestCallStatus]);

  useEffect(() => {
    if (dataSender.room != "") {
      socketVideoCall.emit("caller", dataSender);
    }
  }, [dataSender]);

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
            zIndex: 10,
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
