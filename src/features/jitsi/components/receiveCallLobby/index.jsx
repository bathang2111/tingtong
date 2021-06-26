import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import CancleIcon from "../../../../assets/images/CancelIcon.png";
import { CloseReceiveLobby, OpenReceiveLobby } from "../../jitsiSlide";
import { Redirect } from "react-router";
import { useContext, useEffect, useState } from "react";
import ReceiveTheCallRING from "../../../../assets/audio/ReceiveTheCall.mp3";
import Camera from "../../../../assets/images/IconCallVideo.png";
import { SocketContext } from "../../../../api/socketService";
import DefaultAvatar from "../../../../assets/images/avatar4.png";
import { BASE_URL_WINDOW_CALL } from "../../../../constants/baseURl";


const ReceiveCallLobby = (props) => {
  const dispatch = useDispatch();
  const { LobbyReceiveCallStatus } = useSelector((state) => state.jitsi);
  const [roomInfo, setRoom] = useState();
  const socket = useContext(SocketContext);
  const { avatar } = useSelector((state) => state.userprofile.userInfo);
  const [noti, setNoti] = useState({
    title: "Cuộc gọi đến",
    descrip: "đang gọi cho bạn",
    timer: "Bắt đầu ngay khi chấp nhận",
    accept: "Chấp nhận",
    cancle: "Từ chối",
  });

  //THÔNG BÁO KHI CÓ CUỘC GỌI ĐẾN
  useEffect(() => {
    socket.socketVideoCall.on("sendToReceiver", (data) => {
      if (data.action == 1) {
        setRoom(data);
        dispatch(OpenReceiveLobby());
      } else {
        dispatch(CloseReceiveLobby());
      }
    });
  }, []);

  //CHẤP NHẬN CUỘC GỌI
  const onAccept = () => {
    socket.socketVideoCall.emit("receiver", {
      event: "receiver",
      room: roomInfo.room,
      caller: roomInfo.caller_id,
      action: 1,
    });
    dispatch(CloseReceiveLobby());
    //set WIDTH and HEIGHT
    const width = window.screen.width - 200;
    const height = window.screen.height - 180;
    const receiverId = localStorage.getItem("idUser");
    localStorage.setItem("avatar",avatar)
    window.open(
      `${BASE_URL_WINDOW_CALL}/video-call/${roomInfo.room}/${roomInfo.caller_id}/${receiverId}`,
      "Data",
      `height=${height},width=${width},left=100,top=50`
    );
  };

  //TỪ CHỐI CUỘC GỌI
  const onCancleTheCall = () => {
    socket.socketVideoCall.emit("receiver", {
      event: "receiver",
      room: roomInfo.room,
      caller: roomInfo.caller_id,
      action: 2,
    });
    dispatch(CloseReceiveLobby());
  };

  return (
    <>
      <SC.Container isOpen={LobbyReceiveCallStatus}>
        <audio src={ReceiveTheCallRING} autoPlay />
        <SC.GroupTitle>
          <SC.Pain>
            <SC.Title>{noti.title}</SC.Title>
            <SC.CloseBtn onClick={onCancleTheCall}>
              <SC.Cancle src={CancleIcon} />
            </SC.CloseBtn>
          </SC.Pain>
        </SC.GroupTitle>
        <SC.MainGroup>
          <SC.Avatar
            src={
              roomInfo && roomInfo.caller_avatar
                ? roomInfo.caller_avatar
                : DefaultAvatar
            }
          />
          <SC.GroupNoti>
            <SC.SubTitle>
              {roomInfo ? roomInfo.caller_name : ""} {noti.descrip}
            </SC.SubTitle>
            <SC.Timer>{noti.timer}</SC.Timer>
          </SC.GroupNoti>
        </SC.MainGroup>
        <SC.BtnGroup>
          <SC.SubPain>
            <SC.CancleTheCall onClick={onCancleTheCall}>
              {noti.cancle}
            </SC.CancleTheCall>
            <SC.AcceptTheCall onClick={onAccept}>
              <SC.Camera src={Camera} />
              {noti.accept}
            </SC.AcceptTheCall>
          </SC.SubPain>
        </SC.BtnGroup>
      </SC.Container>
    </>
  );
};

export default ReceiveCallLobby;
