import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer";
import * as SC from "./style";
import React, { useEffect, useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import { useDispatch, useSelector } from "react-redux";
import Ripples from "react-ripples";
import SlideShow from "../SlideShow";
import { TogglePopUpSlide } from "../../coursesSlide";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import { ListItemAvatar } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { CardMedia } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";


///////////////////////////////
import AllPages from "../slidePDF/allPDF";
import { AspectRatio, Close } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
////////////////

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowY: "scroll",
    height: "calc(100vh - 70px)",
  },
  title: {
    textAlign: "center",
  },
  media: {
    height: 100,
    width: 180,
    // border: "2px solid",
  },
  video: {
    maxWidth: 700,
    height: "auto",
    // border: "2px solid",
  },
  description: {
    textAlign: "center",
  },
  divider: {
    height: 3,
    margin: "15px 0",
  },
  empty: {
    width: 180,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e8e9ec",
  },
  emptyIcon: {
    width: 60,
    height: 60,
    opacity: 0.3,
  },
}));

const LessonDetailPage = (props) => {
  const classes = useStyles();
  const { idLesson } = props.match.params;
  const { id } = props.match.params;
  const [lesson, setLesson] = useState({});
  const [lessonSlide, setLessonSlide] = useState();
  const [lessonPreparSlide, setLessonPreparSlide] = useState();
  const [lessonVideos, setLessonVideo] = useState([]);
  const [mainVideoUrl, setMainVideoUrl] = useState();
  const [courseDetail, setCourse] = useState({});
  const dispatch = useDispatch();
  const [showSlidePopUp, setShowSlide] = useState(false);
  const history = useHistory();
  let indexx;
  const [indexActive, setIndex] = useState(1);
  const [action, setAction] = useState(0);
  const [open, setOpen] = React.useState(false);

  const setIndexActive = (value) => {
    setIndex(value.index);
    setAction(value.status);
  };

  useEffect(async () => {
    const params = { idLesson, courseId: id };
    const response = await CurriculumsApi.getLessonDetail(params);
    setLesson(response);
  }, [props.match.url]);

  useEffect(() => {
    if (!lesson.id) return;
    if (lesson.slides && lesson.slides.length > 0) {
      setLessonSlide(lesson.slides[0].imageLink);
    }
    if (lesson.prepareSlides && lesson.prepareSlides.length > 0) {
      setLessonPreparSlide(lesson.prepareSlides[0].imageLink);
    }
    if (lesson.videos && lesson.videos.length > 0) {
      setLessonVideo(lesson.videos);
    }
  }, [lesson]);

  const showLessonVideo = () => {
    if (lessonVideos.length == 0)
      return (
        <Card className={classes.empty}>
          <AspectRatio className={classes.emptyIcon} />
        </Card>
      );
    const result = lessonVideos.map((item) => {
      return (
        <CardActionArea
          onClick={() => {
            setMainVideoUrl(item.videoUrl);
            setOpen(true);
          }}
          className={classes.media}
        >
          <CardMedia className={classes.media} image={item.thumbnailUrl} />
        </CardActionArea>
      );
    });
    return result;
  };

  useEffect(async () => {
    const response = await CurriculumsApi.getCourseDetail(id);
    setCourse(response);
  }, []);

  const showLesson = () => {
    if (courseDetail.lessons) {
      const result = courseDetail.lessons.map((les, index) => {
        if (les.id == idLesson) {
          indexx = index + 1;
        }
        return (
          <ListItem
            button
            selected={les.id === idLesson}
            onClick={() => history.push(`/courses/${id}/${les.id}`)}
          >
            <ListItemAvatar>
              <Avatar style={{ background: "#4CAF50" }}>{index + 1}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={les.title} />
          </ListItem>
        );
      });
      return result;
    } else {
      return <h1>no data</h1>;
    }
  };

  const openSlide = () => {
    setShowSlide(true);
  };

  const togglePopupSlideShow = () => {
    setShowSlide(false);
  };

  return (
    <>
      <SlideShow
        pdfSlide={lessonSlide ? lessonSlide : ""}
        pdfPreparSlide={lessonPreparSlide ? lessonPreparSlide : ""}
        preview={action == 1 ? true : false}
        name={lesson.title}
        indexActive={indexActive}
        togglePopup={(value) => togglePopupSlideShow(value)}
        isOpen={showSlidePopUp}
        // pdf={pdfFile}
      />
      <Header />
      <Container style={{ background: "#e8e9ec", marginTop: 30 }} fixed>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.root}>
              <img
                src={courseDetail.avatar}
                style={{ width: "100%", height: "auto" }}
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  {courseDetail.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontSize: 15 }}
                  className={classes.description}
                >
                  {courseDetail.description}
                </Typography>
                <Divider />
                <Divider />
                <List component="nav" aria-label="main mailbox folders">
                  {showLesson()}
                </List>
                <Divider />
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {indexx}
                  </Avatar>
                }
                title={
                  <Typography
                    style={{ maxWidth: 270 }}
                    noWrap
                    gutterBottom
                    variant="h4"
                    component="h2"
                  >
                    {lesson.title}
                  </Typography>
                }
              />
              <Divider className={classes.divider} />
              <CardContent>
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  Before the Lesson
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontSize: 15, marginBottom: 10 }}
                >
                  Review these slides to prepare for your lesson
                </Typography>

                <AllPages
                  size={100}
                  setIndexActive={(value) => setIndexActive(value)}
                  lobby={true}
                  openSlide={() => openSlide()}
                  preview={true}
                  pdfSlide={lessonPreparSlide ? lessonPreparSlide : ""}
                />
                <Divider className={classes.divider} />
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  Lesson Slide
                </Typography>
                {/* {showPreparSlide()} */}
                {/* ////////////////////////////////////// */}

                <AllPages
                  size={100}
                  setIndexActive={(value) => setIndexActive(value)}
                  lobby={true}
                  openSlide={() => openSlide()}
                  pdfSlide={lessonSlide ? lessonSlide : ""}
                />

                <Divider className={classes.divider} />
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  Watched Video
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    width: "100%",
                    // height:100,
                    overflowX: "auto",
                    overflowY: "hidden",
                  }}
                >
                  {showLessonVideo()}
                </div>

                {/* ////////////////////////////////// */}
                {open ? (
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogActions>
                      <DialogTitle id="alert-dialog-slide-title">
                        {"Xem xong"}
                      </DialogTitle>
                      <IconButton onClick={() => setOpen(false)}>
                        <Close />
                      </IconButton>
                    </DialogActions>
                    <DialogContent style={{ paddingBottom: 24 }}>
                      <CardMedia
                        component="video"
                        controls
                        className={classes.video}
                        image={mainVideoUrl}
                        autoPlay
                      />
                    </DialogContent>
                  </Dialog>
                ) : (
                  ""
                )}
                {/* ///////////////////// */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <SC.Container>
        <SC.LeftGroup>
          <SC.Avatar>
            <SC.Image src={courseDetail.avatar} />
            <SC.Title>{courseDetail.name}</SC.Title>
            <SC.SubTitle>{courseDetail.description}</SC.SubTitle>
          </SC.Avatar>
          <SC.ListLessons>List Lessons</SC.ListLessons>
          <SC.GroupLesson>{showLesson()}</SC.GroupLesson>
        </SC.LeftGroup>
        <SC.RightGroup>
          <SC.STTLesson>LESSON {indexx}</SC.STTLesson>
          <SC.NameLesson>{lesson.title}</SC.NameLesson>
          <SC.SubTitlee>Before the Lesson</SC.SubTitlee>
          <SC.Review>Review these slides to prepare for your lesson</SC.Review>
          <SC.PreparGroup>{showPreparSlide()}</SC.PreparGroup>
          <SC.SubTitlee>Lesson Slide</SC.SubTitlee>
          <SC.PreparGroup>{showSlide()}</SC.PreparGroup>
          <SC.SubTitlee>Review Lesson Videos</SC.SubTitlee>
          <SC.PreparGroup>{showVideos()}</SC.PreparGroup>
        </SC.RightGroup>
      </SC.Container> */}
      <Footer />
    </>
  );
};

export default LessonDetailPage;
