import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import { useEffect } from "react";
import { useState } from "react";
import TutorsApi from "../../../../api/tutorsApi";
import {
  OpenFeedBackLobby,
  setInfoTutor,
} from "../../../feedBack/feedBackSlide";

const RequestCallLobby = (props) => {
  const dispatch = useDispatch();
  const { feedBackStatus } = useSelector((state) => state.feedback);
  const [receiver, setReceiver] = useState();
  const { image } = useSelector((state) => state.userprofile);
  const [accept, setAccept] = useState(false);
  const [cancle, setCancle] = useState(false);
  const [calling, setCalling] = useState(false);
  const [busy, setBusy] = useState(false);
  const { camStatus } = useSelector((state) => state.jitsi);
  const socket = props.socket;
  let timeOut;
  // const { micStatus } = useSelector((state) => state.jitsi);

  useEffect(async () => {
    const id = localStorage.getItem("receiverId");
    const response = await TutorsApi.getTutorDetail(id);
    dispatch(setInfoTutor(response));
    setReceiver(response);
  }, []);

  //LẮNG NGHE SỰ KIỆN XM NGƯỜI NHẬN CUỘC GỌI CÓ DỒNG Ý HAY KHÔNG
  useEffect(() => {
    socket.on("sendToCaller", (data) => {
      clearTimeout(timeOut);
      if (data.action == 1) {
        setAccept(true);
        setCalling(true);
      } else {
        setCancle(true);
        setAccept(false);
        props.CancleTheCall(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!cancle) return;
    if (calling) {
      dispatch(OpenFeedBackLobby());
    }
  }, [cancle]);

  //GỌI ĐẾN MỘT GIÁO VIÊN
  useEffect(() => {
    // if (!props) return;
    socket.emit("caller", {
      event: "caller",
      room: props.roomId,
      receiver: props.receiverId,
      action: 1,
    });
    //waiting 30 second
    timeOut = setTimeout(() => {
      setCancle(true);
      props.CancleTheCall(true);
      setBusy(true);
      socket.emit("caller", {
        event: "caller",
        room: props.roomId,
        receiver: props.receiverId,
        action: 2,
      });
    }, 30000);
  }, []);

  const showNotification = () => {
    if (calling) {
      return "Cuộc gọi đã kết thúc";
    } else {
      if (busy) {
        return "Người nhận không bắt máy";
      } else {
        return "Người nhận từ chối cuộc gọi";
      }
    }
  };

  return (
    <>
      {accept ? (
        ""
      ) : (
        <>
          {cancle ? (
            <SC.CancleCall>
              <SC.Avatar
                src={receiver && receiver.avatar ? receiver.avatar : image}
              />
              <SC.Name
                style={{ color: "rgba(255,255,255,0.8)", marginTop: "20px" }}
              >
                {receiver ? receiver.name : ""}
              </SC.Name>
              <SC.NotiCancle>{showNotification()}</SC.NotiCancle>
              <SC.GroupBTN>
                <SC.CloseWindow
                  onClick={() => {
                    window.close();
                    localStorage.removeItem("receiverId");
                  }}
                >
                  Đóng
                </SC.CloseWindow>
                <SC.CallBack onClick={() => window.location.reload()}>
                  Gọi lại
                </SC.CallBack>
              </SC.GroupBTN>
            </SC.CancleCall>
          ) : (
            <SC.Container>
              {camStatus ? (
                <SC.WebCamm />
              ) : (
                <SC.BackgroundLobby
                  src={receiver && receiver.avatar ? receiver.avatar : image}
                />
              )}
              <SC.GroupReceiver>
                <SC.Avatar
                  src={receiver && receiver.avatar ? receiver.avatar : image}
                />
                <SC.Pain>
                  <SC.Name>{receiver ? receiver.name : ""}</SC.Name>
                  <SC.Status>dang goi</SC.Status>
                </SC.Pain>
              </SC.GroupReceiver>
            </SC.Container>
          )}
        </>
      )}
    </>
  );
};

export default RequestCallLobby;
