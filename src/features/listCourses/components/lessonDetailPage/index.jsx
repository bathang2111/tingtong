import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer";
import * as SC from "./style";
import { useEffect, useState } from "react";
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
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { useHistory } from "react-router-dom";
import { ListItemAvatar } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { CardMedia } from "@material-ui/core";
///////////////////////////////
import AllPages from "../slidePDF/allPDF";
import pdfFile from "./pdfFile.pdf";
////////////////
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowY: "scroll",
    height: "calc(100vh - 70px)",
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
}));

const LessonDetailPage = (props) => {
  const classes = useStyles();
  const { idLesson } = props.match.params;
  const { id } = props.match.params;
  const [lesson, setLesson] = useState({});
  const [courseDetail, setCourse] = useState({});
  const dispatch = useDispatch();
  const [showSlidePopUp, setShowSlide] = useState(false);
  const history = useHistory();
  let indexx;
  const [indexActive, setIndex] = useState(1);

  const setIndexActive = (value) => {
    console.log(value);
    setIndex(value);
  };

  useEffect(async () => {
    const params = { idLesson, courseId: id };
    const response = await CurriculumsApi.getLessonDetail(params);
    console.log(response);
    setLesson(response);
  }, [props.match.url]);

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

  const showPreparSlide = () => {
    if (!lesson.prepareSlides) return;
    const result = lesson.prepareSlides.map((item) => {
      return (
        <SC.BeforeImg
          onClick={() => dispatch(TogglePopUpSlide())}
          src={item.imageLink}
        />
      );
    });
    return result;
  };

  const showSlide = () => {
    if (!lesson.slides) return;
    const result = lesson.slides.map((item) => {
      return (
        <SC.BeforeImg
          onClick={() => dispatch(TogglePopUpSlide())}
          src={item.imageLink}
        />
      );
    });
    return result;
  };

  const showVideos = () => {
    if (!lesson.videos) return;
    const result = lesson.videos.map((item) => {
      return <SC.Videos controls src={item.videoUrl} />;
    });
    return result;
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
        name={lesson.title}
        indexActive={indexActive}
        togglePopup={(value) => togglePopupSlideShow(value)}
        isOpen={showSlidePopUp}
        pdf={pdfFile}
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
              <CardContent>
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  Before the Lesson
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontSize: 15 }}
                >
                  Review these slides to prepare for your lesson
                </Typography>
                <Divider />
                <Divider />

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
                  pdf={pdfFile}
                />

                {/* ////////////////////////////////// */}
                <Typography noWrap gutterBottom variant="h5" component="h2">
                  Watched Video
                </Typography>
                <video src={lesson.video ? lesson.video[0] : ""} />
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
