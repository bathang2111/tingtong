import { useDispatch, useSelector } from "react-redux";
import CallVideoApi from "../../../../api/callVideoApi";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import flag from "../../../../assets/images/flagVietNamIcon.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import {
  ToggleProfileModal,
  TutorIdDetail,
} from "../../../homePage/homePageSlice";
import * as SC from "./style";
import { useState } from "react";
import FeedBackApi from "../../../../api/feedbackApi";
import { useEffect } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { SendStatusLike } from "../../tutorSlide";
import { BASE_URL_WINDOW_CALL } from "../../../../constants/baseURl";
import { useHistory } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { PushNotification } from "../../../notification/notificationSlide";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 390,
    height: 270,
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
  },
  btnGroup: {
    // background: "black",
    paddingRight: 20,
    display: "flex",
    justifyContent: "flex-end",
  },
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

const Tutor = (props) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);
  const [likeStatus, setStatusLikeTutor] = useState(false);
  const left = (window.screen.width - 700) / 2;
  const top = (window.screen.height - 380) / 2;
  const classes = useStyles();
  const isOpen = useSelector((state) => state.homepage.toggleModal);
  const idTutorDetail = useSelector((state) => state.homepage.idTutor);
  const { status } = useSelector((state) => state.tutors);
  const [isOpenNoti, setOpenNoti] = useState(false);
  const { totalTime } = useSelector((state) => state.userprofile.userInfo);
  const { avatar } = useSelector((state) => state.userprofile.userInfo);
  const history = useHistory();

  useEffect(() => {
    if (!props.favoriteTutors) return;
    const check = props.favoriteTutors.find((item) => item.id == props.info.id);
    if (check) {
      setStatusLikeTutor(true);
    } else {
      setStatusLikeTutor(false);
    }
  }, [props.favoriteTutors]);

  useEffect(() => {
    if (isOpen || idTutorDetail != props.info.id) return;
    // console.log(status);
    setStatusLikeTutor(status);
  }, [isOpen]);

  const LikeTutor = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (likeStatus == false) {
      setStatusLikeTutor(true);
      try {
        const res = await FeedBackApi.likeTutor(props.info.id);
      } catch (error) {
        console.log(error);
      }
    } else {
      setStatusLikeTutor(false);
      try {
        const res = await FeedBackApi.unlikeTutor(props.info.id);
      } catch (error) {
        console.log(error);
      }
    }
    // likeStatus == likeTutorIcon ? setStatusLikeTutor(unLikeTutorIcon) : setStatusLikeTutor(likeTutorIcon);
  };

  const readRating = () => {
    return Math.round(props.info.avgRating * 2) / 2;
  };

  const onRequestTheCall = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (totalTime === 0) {
      setOpenNoti(true);
      return;
    }

    //save nti
    const time = new Date();
    const a = time.toLocaleTimeString();
    const data = {
      avatar: props.info.avatar,
      name: props.info.name,
      time: a,
    };
    dispatch(PushNotification(data));
    // click event call video
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("receiverId", props.info.id);
    const room = await CallVideoApi.RequestCallVideo({
      userId: props.info.userID,
    });
    const callerId = localStorage.getItem("idUser");
    window.open(
      `${BASE_URL_WINDOW_CALL}/video-call/${room.id}/${callerId}/${props.info.userID}`,
      "Data",
      `height=380,width=700,left=${left},top=${top}`
    );
  };

  const toggleProfileModal = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(SendStatusLike(likeStatus));
    dispatch(ToggleProfileModal());
    dispatch(TutorIdDetail(props.info.id));
  };
  return (
    <SC.Pain>
      {" "}
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
      <Card className={classes.root}>
        <CardActionArea className={classes.area} onClick={toggleProfileModal}>
          <CardHeader
            avatar={
              props.info.isOnline ? (
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar
                    src={props.info.avatar}
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
                    <SmallAvatar alt="Remy Sharp" src={props.info.avatar} />
                  }
                >
                  <Avatar
                    src={props.info.avatar}
                    aria-label="recipe"
                    className={classes.avatar}
                  ></Avatar>
                </Badge>
              )
            }
            action={
              <IconButton
                onMouseDown={(event) => event.stopPropagation()}
                onClick={LikeTutor}
                aria-label="settings"
              >
                {likeStatus ? (
                  <Icon style={{ color: "red" }}>favorite</Icon>
                ) : (
                  <Icon>favorite_border</Icon>
                )}
              </IconButton>
            }
            title={
              <Typography noWrap gutterBottom variant="h4" component="h2">
                {props.info.name}
              </Typography>
            }
            subheader={
              <>
                <Box className={classes.boxStar}>
                  <Rating
                    name="half-rating-read"
                    size="small"
                    precision={0.5}
                    defaultValue={readRating()}
                    readOnly
                  />
                </Box>
                <CardMedia
                  className={classes.media}
                  image={flag}
                  title="Contemplative Reptile"
                />
              </>
            }
          />

          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.info.introduction}
            </Typography>
          </CardContent>
          <CardActions className={classes.btnGroup}>
            <Button
              onMouseDown={(event) => event.stopPropagation()}
              onClick={toggleProfileModal}
              variant="outlined"
              size="small"
              color="primary"
            >
              Profile
            </Button>
            <Button
              onMouseDown={(event) => event.stopPropagation()}
              onClick={onRequestTheCall}
              variant="contained"
              size="small"
              color="primary"
            >
              Gọi
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </SC.Pain>
  );
};

export default Tutor;
