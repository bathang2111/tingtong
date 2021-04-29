import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import IconCancle from "../../../../assets/images/CancelCall.png";
import { CloseRequestLobby, CallerStatusTrue } from "../../jitsiSlide";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import CallVideoApi from "../../../../api/callVideoApi";
import { SocketContext } from "../../../../api/socketService";

const RequestCallLobby = (props) => {
  const { LobbyRequestCallStatus } = useSelector((state) => state.jitsi);
  const { InfoTutor } = useSelector((state) => state.jitsi);
  const [roomCall, setRoom] = useState();
  const dispatch = useDispatch();
  const [onCall, setOncall] = useState(false);
  const socker = useContext(SocketContext);
  const socket=socker.socketVideoCall

  //LẮNG NGHE SỰ KIỆN XM NGƯỜI NHẬN CUỘC GỌI CÓ DỒNG Ý HAY KHÔNG
  useEffect(() => {
    socket.on("sendToCaller", (data) => {
      if (data.action == 1) {
        setOncall(true);
        dispatch(CloseRequestLobby());
      } else {
        setOncall(false);
        dispatch(CloseRequestLobby());
      }
    });
  }, []);

  //GỌI ĐẾN 1 GIÁO VIÊN
  useEffect(async () => {
    if (!LobbyRequestCallStatus) return;
    const room = await CallVideoApi.RequestCallVideo({
      userId: InfoTutor.userID,
    });
    setRoom(room);

    dispatch(CallerStatusTrue());
  }, [LobbyRequestCallStatus]);

  useEffect(() => {
    if (!roomCall) return;
    socket.emit("caller", {
      event: "caller",
      room: roomCall.id,
      receiver: InfoTutor.userID,
      action: 1,
    });
  }, [roomCall]);

  //HỦY YÊU CẦU CUỘC GỌI ĐI
  const onCancleTheCall = () => {
    socket.emit("caller", {
      event: "caller",
      room: roomCall.id,
      receiver: InfoTutor.userID,
      action: 2,
    });
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
            <SC.CancleButton onClick={onCancleTheCall}>
              <SC.Icon src={IconCancle} />
            </SC.CancleButton>
          </SC.GrouButton>
        </SC.Group>
      </SC.Container>
    </>
  );
};

export default RequestCallLobby;
