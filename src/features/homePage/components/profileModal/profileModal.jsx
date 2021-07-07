import { unwrapResult } from "@reduxjs/toolkit";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageApi from "../../../../api/messageApi";
import { SocketContext } from "../../../../api/socketService";
import TutorsApi from "../../../../api/tutorsApi";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FlagIcon from "../../../../assets/images/flagVietNamIcon.png";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { BASE_URL_WINDOW_CALL } from "../../../../constants/baseURl";
import {
  Close,
  Favorite,
  FavoriteBorder,
  Message,
  Report,
} from "@material-ui/icons";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Box,
  CardMedia,
  Button,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Rating from "@material-ui/lab/Rating";
// import { socketChat } from "../../../../app/App";
import {
  GetContentByRoomId,
  OpenChatWindow,
  PushChatTing,
  setRoomId,
} from "../../../messenger/messageSlide";
import { ToggleProfileModal } from "../../homePageSlice";
import * as SC from "./style";
import FeedBackApi from "../../../../api/feedbackApi";
import { getUserInfo } from "../../../setting/userProfileSlide";
import { SendStatusLike } from "../../../listTutors/tutorSlide";
import TextField from "@material-ui/core/TextField";
import CallVideoApi from "../../../../api/callVideoApi";
import { useHistory } from "react-router-dom";
import { PushNotification } from "../../../notification/notificationSlide";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
  },
  favorite: {
    marginLeft: "auto",
    // background:"#ffa"
  },
  root: {
    // width: "80%",
    // background: "#ffa",
    // alignItems: "center",
    // height: 270,
    padding: "16px 30px",
  },
  content: {
    padding: "5px 16px",
    // background: "blue",
    height: 100,
  },
  media: {
    width: 40,
    height: 30,
    // background: "black",
  },
  area: {
    height: "100%",
  },
  boxStar: {
    margin: 0,
    height: 20,
  },
  avatar: {
    width: 85,
    height: 85,
    // borderBottomRightRadius: 0,
  },
  group: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
  },
  button: {
    width: "100%",
    // height: 30,
    // marginLeft: "auto",
  },
  video: {
    padding: "0 30px",
    maxHeight: 300,
  },
  action: {
    alignItems: "flex-start",
  },
  listItem: {},
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    width: 13.5,
    height: 13.5,
    borderRadius: "50%",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const Profile = (props) => {
  const isOpen = useSelector((state) => state.homepage.toggleModal);
  const idTutorDetail = useSelector((state) => state.homepage.idTutor);
  const [Tutor, setTutor] = useState({});
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const classes = useStyles();
  const { status } = useSelector((state) => state.tutors);
  const [reason, setReason] = useState("");
  const [IsOpenReport, setOpen] = useState(false);
  const left = (window.screen.width - 700) / 2;
  const top = (window.screen.height - 380) / 2;
  const [isOpenNoti, setOpenNoti] = useState(false);
  const { totalTime } = useSelector((state) => state.userprofile.userInfo);
  const history = useHistory();
  const [listFeedBack, setListFeedBack] = useState([]);

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleReport = async () => {
    setOpen(false);
    try {
      const body = { reason: reason };
      await TutorsApi.ReportTutor(idTutorDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    if (idTutorDetail == "") return;
    const response = await TutorsApi.getTutorDetail(idTutorDetail);
    setTutor(response);
    const feedBack = await FeedBackApi.GetTutorReview(idTutorDetail);
    console.log(feedBack);
    setListFeedBack(feedBack);
  }, [idTutorDetail]);

  const onHandleClick = async () => {
    dispatch(ToggleProfileModal());
    dispatch(OpenChatWindow());
    const body = {
      roomName: "Tutor.name",
      roomType: 1,
      memberRoom: [
        {
          userID: localStorage.getItem("idUser"),
        },
        {
          userID: Tutor.userID,
        },
      ],
    };

    const room = await MessageApi.CreateRoom(body);

    /////////////////////////////

    const userChatTing = {
      id: room.data.id,
      receiver: Tutor.userID,
      name: Tutor.name,
      avatar: Tutor.avatar,
    };
    dispatch(setRoomId(userChatTing));
    //Save to list chatTing
    let content = await dispatch(GetContentByRoomId(room.data.id)); // get all mesages in conversation
    let res = unwrapResult(content);
    ///////////////////////////////////////
    socket.socketChat.emit("joinRoom", {
      event: "joinRoom",
      room: room.data.id,
    }); // emit event join rôm
    dispatch(
      PushChatTing({
        roomId: room.data.id,
        chatContent: res,
        avatar: Tutor.avatar,
        name: Tutor.username,
        receiver: Tutor.userID,
        notification: 0,
      })
    );
  };

  const showLanguage = () => {
    if (!Tutor.name) return;
    const result = Tutor.languages.map((item) => {
      return (
        <Chip
          size="small"
          label={item.name}
          color="primary"
          icon={<DoneIcon />}
        />
      );
    });
    return result;
  };

  const LikeTutor = async () => {
    if (status == false) {
      dispatch(SendStatusLike(true));
      try {
        const res = await FeedBackApi.likeTutor(idTutorDetail);
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(SendStatusLike(false));
      try {
        const res = await FeedBackApi.unlikeTutor(idTutorDetail);
      } catch (error) {
        console.log(error);
      }
    }
    // status == likeTutorIcon ? setStatusLikeTutor(unLikeTutorIcon) : setStatusLikeTutor(likeTutorIcon);
  };

  const onRequestTheCall = async (event) => {
    if (totalTime === 0) {
      setOpenNoti(true);
      return;
    }
    //save nti
    const time = new Date();
    const a = time.toLocaleTimeString();
    const data = {
      avatar: Tutor.avatar,
      name: Tutor.name,
      time: a,
    };
    dispatch(PushNotification(data));
    // click event call video
    localStorage.setItem("receiverId", Tutor.id);
    const room = await CallVideoApi.RequestCallVideo({
      userId: Tutor.userID,
    });
    console.log(room);
    const callerId = localStorage.getItem("idUser");
    window.open(
      `${BASE_URL_WINDOW_CALL}/video-call/${room.id}/${callerId}/${Tutor.userID}`,
      "Data",
      `height=380,width=700,left=${left},top=${top}`
    );
  };

  const timer = (time) => {
    const dateObj = new Date(time);
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const hour = dateObj.getUTCHours();
    const min = dateObj.getUTCMinutes();
    const sec = dateObj.getUTCSeconds();
    return day + "-" + month + "-" + year + " " + hour + ":" + min;
  };

  const showListFeedBack = () => {
    if (listFeedBack.length == 0)
      return (
        <ListItem>
          <Typography
            variant="body2"
            style={{ fontSize: 13 }}
            color="textPrimary"
            component="p"
          >
            Không có nhận xét nào
          </Typography>
        </ListItem>
      );
    const result = listFeedBack.map((item) => {
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src={item.student.avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={item.student.fullName}
            secondary={
              <>
                <Rating
                  readOnly
                  name="size-small"
                  defaultValue={item.rating}
                  size="small"
                />
                <br />
                <Typography
                  variant="body2"
                  style={{ fontSize: 13 }}
                  color="textSecondary"
                  component="p"
                >
                  {item.feedback}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ fontSize: 11 }}
                  color="textSecondary"
                  component="p"
                >
                  {timer(item.updatedAt)}
                </Typography>
              </>
            }
          />
        </ListItem>
      );
    });
    return result;
  };

  const readRating = () => {
    return Math.round(Tutor.avgRating * 2) / 2;
  };

  return (
    <SC.Contaner
      isOpen={isOpen}
      onRequestClose={() => {
        dispatch(ToggleProfileModal());
      }}
      style={{
        overlay: {
          zIndex: "10",
          background: "rgba(0,0,0,0.3)",
        },
      }}
    >
      {/* //////////notification////////// */}
      {isOpenNoti ? (
        <div>
          <Dialog
            open={isOpenNoti}
            onClose={() => setOpenNoti(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Hết thời gian"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thời gian còn lại của bạn không đủ để kết nối tới giáo viên, bạn
                có muốn mua thêm gói thời gian để tiếp tục không?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenNoti(false)} color="primary">
                Hủy
              </Button>
              <Button
                onClick={() => {
                  setOpenNoti(false);
                  history.push("/payment");
                }}
                color="primary"
                autoFocus
              >
                Mua gói
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        ""
      )}

      {IsOpenReport ? (
        <div>
          <Dialog open={IsOpenReport} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Báo cáo</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Giúp chúng tôi hiểu rõ gia sư này đang gặp vấn đề gì. Bạn sẽ mô
                tả vấn đề đó như thế nào?
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Mô tả vấn đề"
                onChange={handleChange}
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary">
                Hủy
              </Button>
              <Button onClick={handleReport} color="primary">
                Báo cáo
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        ""
      )}

      {/* //////////////////// */}
      <Card className={classes.container}>
        <CardActions disableSpacing>
          <IconButton
            onClick={async () => {
              dispatch(ToggleProfileModal());
            }}
          >
            <Close />
          </IconButton>
          <IconButton onClick={LikeTutor} className={classes.favorite}>
            {status ? (
              <Favorite style={{ color: "red" }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
          <IconButton onClick={onHandleClick}>
            <Message />
          </IconButton>
          <IconButton onClick={() => setOpen(true)}>
            <Report />
          </IconButton>
        </CardActions>
        {/* /////////////////////// */}
        <CardHeader
          className={classes.root}
          avatar={
            Tutor.isOnline ? (
              <StyledBadge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  src={Tutor.avatar}
                  aria-label="recipe"
                  className={classes.avatar}
                ></Avatar>
              </StyledBadge>
            ) : (
              /////////////
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <SmallAvatar alt="Remy Sharp" src={Tutor.avatar} />
                }
              >
                <Avatar
                  src={Tutor.avatar}
                  aria-label="recipe"
                  className={classes.avatar}
                ></Avatar>
              </Badge>
            )
          }
          action={<IconButton></IconButton>}
          title={
            <Typography noWrap gutterBottom variant="h4" component="h2">
              {Tutor.name}
            </Typography>
          }
          subheader={
            <>
              <Box className={classes.boxStar}>
                <Rating
                  name="half-rating-read"
                  size="small"
                  precision={0.5}
                  value={readRating()}
                  readOnly
                />
              </Box>
              <CardMedia
                className={classes.media}
                image={FlagIcon}
                title="Contemplative Reptile"
              />
            </>
          }
        />
        <CardActions className={classes.group}>
          <Button
            onClick={onRequestTheCall}
            className={classes.button}
            size="medium"
            color="primary"
            variant="contained"
          >
            Gọi
          </Button>
        </CardActions>
        <CardMedia
          component="video"
          // autoPlay
          controls
          className={classes.video}
          src={Tutor.introVideo}
        />
        <CardContent style={{ padding: "20px 30px" }}>
          <div style={{}}></div>
          <Typography noWrap gutterBottom variant="h4" component="h2">
            Thông tin
          </Typography>
          <CardActions className={classes.action}>
            <Typography
              style={{ minWidth: "30%" }}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              Language:
            </Typography>
            {showLanguage()}
          </CardActions>
          <CardActions className={classes.action}>
            <Typography
              style={{ minWidth: "30%" }}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              Introduction:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: 15 }}
            >
              {Tutor.introduction}
            </Typography>
          </CardActions>
          <CardActions className={classes.action}>
            <Typography
              style={{ minWidth: "30%" }}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              Certificates:
            </Typography>
            <Chip
              size="small"
              label={
                Tutor.certificates && Tutor.certificates.length > 0
                  ? Tutor.certificates[0].name
                  : ""
              }
              color="primary"
              icon={<DoneIcon />}
            />
          </CardActions>
          <CardActions className={classes.action}>
            <Typography
              style={{ minWidth: "30%" }}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              Education::
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: 15 }}
            >
              {Tutor.education}
            </Typography>
          </CardActions>
          <CardActions className={classes.action}>
            <Typography
              style={{ minWidth: "30%" }}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              Background:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: 15 }}
            >
              {Tutor.professionalBackground}
            </Typography>
          </CardActions>
          <CardActions className={classes.action}>
            <Typography
              style={{ minWidth: "30%" }}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              Experience:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: 15 }}
            >
              {Tutor.experience}
            </Typography>
          </CardActions>
          <CardActions className={classes.action}>
            <Typography
              style={{ minWidth: "30%" }}
              noWrap
              gutterBottom
              variant="h5"
              component="h2"
            >
              Interest:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ fontSize: 15 }}
            >
              {Tutor.interest}
            </Typography>
          </CardActions>
          <Divider style={{ margin: "10px 0", height: 3 }} />
          <Typography
            style={{ minWidth: "30%" }}
            noWrap
            gutterBottom
            variant="h5"
            component="h2"
          >
            Nhận xét
          </Typography>
          <List>{showListFeedBack()}</List>
        </CardContent>
      </Card>
    </SC.Contaner>
  );
};

export default Profile;
