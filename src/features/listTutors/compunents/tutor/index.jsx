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

import { makeStyles } from "@material-ui/core/styles";
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

  const onRequestTheCall = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (totalTime === 0) {
      setOpenNoti(true);
      return;
    }
    // click event call video
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
              <Avatar
                src={props.info.avatar}
                aria-label="recipe"
                className={classes.avatar}
              ></Avatar>
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
                  <Rating size="small" name="read-only" value={4} readOnly />
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

    // <SC.Pain>

    //   <SC.Container>
    //     <SC.InfoGroup>
    //       <SC.Avatar background={props.info.avatar}>
    //         {props.info.isOnline ? <SC.IsOnline /> : ""}
    //       </SC.Avatar>
    //       <SC.Info>
    //         <SC.GroupName>
    //           <SC.Name>{props.info.name}</SC.Name>
    //           <SC.Love onClick={LikeTutor}>
    //             <SC.Heart src={likeStatus ? likeTutorIcon : unLikeTutorIcon} />
    //           </SC.Love>
    //         </SC.GroupName>
    //         <Icon  >favorite</Icon>
    //         <SC.Feedback>
    //           <SC.Star />
    //           <SC.Star />
    //           <SC.Star />
    //           <SC.Star />
    //           <SC.HaffStar />
    //           <span>. 5.0</span>
    //         </SC.Feedback>
    //         <SC.EnsignGroup>
    //           <SC.Ensign />
    //           <SC.Nation>{props.nation}</SC.Nation>
    //         </SC.EnsignGroup>
    //       </SC.Info>
    //     </SC.InfoGroup>
    //     <SC.Introduce>
    //       <span>{props.info.introduction}</span>
    //     </SC.Introduce>
    //     <SC.ButtonGroup>
    //       <Ripples>
    //         <SC.ProfileButton onClick={toggleProfileModal}>
    //           Profile
    //         </SC.ProfileButton>
    //       </Ripples>
    //       <SC.Painn />
    //       <Ripples>
    //         <SC.CallButton onClick={onRequestTheCall}>
    //           {language.call}
    //         </SC.CallButton>
    //       </Ripples>
    //     </SC.ButtonGroup>
    //   </SC.Container>
    // </SC.Pain>
  );
};

export default Tutor;
