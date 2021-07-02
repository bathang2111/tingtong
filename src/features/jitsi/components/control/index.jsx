import * as SC from "./style";
import CancleIcon from "../../../../assets/images/CancelCall.png";
import CloseMicIcon from "../../../../assets/images/IconCloseMicro.png";
import CloseCamIcon from "../../../../assets/images/IconCloseCamera.png";
import ScreenIcon from "../../../../assets/images/IconShareScrenn.png";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCamera, ToggleMicro, ToggleShareScreen } from "../../jitsiSlide";
import { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";

const ControlTheCall = (props) => {
  const dispatch = useDispatch();
  const { camStatus } = useSelector((state) => state.jitsi);
  const { micStatus } = useSelector((state) => state.jitsi);
  const [isOpen, setOpen] = useState(false);
  const { socket } = props;
  const aboutMe =
    localStorage.getItem("idUser") == props.receiverId ? "receiver" : "caller";

  const alertUser = (event) => {
    if (aboutMe == "caller") {
      socket.emit("caller", {
        event: "caller",
        room: props.roomId,
        receiver: props.receiverId,
        action: 2,
      });
      localStorage.removeItem("receiverId");
    } else {
      socket.emit("receiver", {
        event: "receiver",
        room: props.roomId,
        caller: props.callerId,
        action: 2,
      });
    }
    window.close();
    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  });

  const cancleTheCall = () => {
    localStorage.removeItem("receiverId");
    localStorage.removeItem("avatar");
    if (aboutMe == "caller") {
      socket.emit("caller", {
        event: "caller",
        room: props.roomId,
        receiver: props.receiverId,
        action: 2,
      });
    } else {
      socket.emit("receiver", {
        event: "receiver",
        room: props.roomId,
        caller: props.callerId,
        action: 2,
      });
    }

    window.close();
  };

  useEffect(() => {
    if (props.mangStatus) cancleTheCall();
  }, [props.mangStatus]);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Dừng cuộc gọi"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn chắc chắn muốn dừng cuộc gọi? Bạn sẽ không thể đánh giá giáo
            viên khi thực hiện tác vụ này.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Hủy
          </Button>
          <Button onClick={cancleTheCall} color="primary" autoFocus>
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
      {/* /////////////////////////////// */}
      {/* ////////////////////////////// */}
      <SC.Container>
        <SC.ShareScreen onClick={() => dispatch(ToggleShareScreen())}>
          <SC.ScrennIcon src={ScreenIcon} />
        </SC.ShareScreen>
        <SC.GroupControl>
          <SC.CloseBtn
            style={
              camStatus
                ? { background: "none" }
                : { background: "rgba(255,255,255,0.4)" }
            }
            onClick={() => dispatch(ToggleCamera())}
          >
            <SC.Icon src={CloseCamIcon} />
          </SC.CloseBtn>
          <SC.CancleButton onClick={() => setOpen(true)}>
            <SC.Icon src={CancleIcon} />
          </SC.CancleButton>
          <SC.CloseBtn
            style={
              micStatus
                ? { background: "none" }
                : { background: "rgba(255,255,255,0.4)" }
            }
            onClick={() => dispatch(ToggleMicro())}
          >
            <SC.Icon src={CloseMicIcon} />
          </SC.CloseBtn>
        </SC.GroupControl>
      </SC.Container>
    </>
  );
};

export default ControlTheCall;
