import Header from "../../../../components/header/header";
import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import Footer from "../../../../components/footer";
import { getCourses, setCourseDetail } from "../../coursesSlide";
import ShareLink from "../shareLink";
import Enroll from "../enroll";
import FeedBackApi from "../../../../api/feedbackApi";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { ImportContacts } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory, useRouteMatch } from "react-router-dom";
import { green, pink } from "@material-ui/core/colors";
import AuthApi from "../../../../api/authApi";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useRef } from "react";
import ReportCourse from "../report/Report";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 410,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: green[500],
  },
}));

const CourseDetailPage = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  const { params } = match;
  console.log(match);
  const id ="asdsad" //props.match.params.id;
  const url = "dasdsa";
  const { courseDetail } = useSelector((state) => state.courses);
  const [lesson, setLessons] = useState({ listLessons: [], length: 0 });
  const { curriculums } = useSelector((state) => state.courses);
  const [relativeCourse, setRela] = useState([]);
  const dispatch = useDispatch();
  const [shareLink, setShareLink] = useState(false);
  const [subcribe, setSubcribe] = useState(false);
  const [report, setReport] = useState(false);
  const [likeStatus, setStatusLikeCourse] = useState(false);
  const [favoriteCourse, setFavoriteCourse] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();
  const { userInfo } = useSelector((state) => state.userprofile);

  ///////////mrnu////////
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSubcribe = (event) => {
    setSubcribe(true);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleReport = (event) => {
    setReport(true);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  // //////////////////

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(async () => {
    if (userInfo.id) {
      setFavoriteCourse(userInfo.favoriteCourses);
    } else {
      try {
        const res = await AuthApi.getUserInfo();
        setFavoriteCourse(res.favoriteCourses);
      } catch (error) {}
    }
  }, [id]);

  useEffect(() => {
    const check = favoriteCourse.find((item) => item.id === id);
    if (check) {
      setStatusLikeCourse(true);
    } else {
      setStatusLikeCourse(false);
    }
  }, [id, favoriteCourse]);

  useEffect(async () => {
    const response = await CurriculumsApi.getCourseDetail(id);
    dispatch(setCourseDetail(response));
    setLessons({
      listLessons: response.lessons,
      length: response.lessons.length,
    });
  }, [id]);

  useEffect(async () => {
    if (curriculums.length == 0) {
      await dispatch(getCourses());
    }
  }, []);

  useEffect(() => {
    if (curriculums.length == 0) return;
    if (!courseDetail.id) return;
    const rela = curriculums.filter((item) => {
      return item.id == courseDetail.curriculumID;
    });
    setRela(rela[0].courses);
  }, [curriculums, courseDetail]);

  const showLesson = () => {
    const result = lesson.listLessons.map((les, index) => {
      const endPoint = les.id;
      return (
        <ListItem button onClick={() => history.push(`${url}/${endPoint}`)}>
          <ListItemAvatar>
            <Avatar
              style={{ background: index % 2 == 0 ? "#4CAF50" : "#2f8c92" }}
            >
              {index + 1}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={les.title} secondary={courseDetail.name} />
        </ListItem>
      );
    });
    return result;
  };

  const showRelativeCourse = () => {
    const re = relativeCourse.map((item) => {
      if (item.id == courseDetail.id) return;
      return (
        <SC.RelativeCourse to={`/courses/${item.id}`}>
          <SC.RelaImage src={item.avatar} />

          <Typography noWrap gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontSize: 15 }}
          >
            {item.description}
          </Typography>

          {/* <SC.RelaTitle>{item.name}</SC.RelaTitle>
          <SC.RelaDescription>{item.description}</SC.RelaDescription> */}
        </SC.RelativeCourse>
      );
    });
    return re;
  };

  const LikeCourse = async () => {
    if (likeStatus == false) {
      setStatusLikeCourse(true);
      try {
        const res = await FeedBackApi.likeCourse(courseDetail.id);
      } catch (error) {
        console.log(error);
      }
    } else {
      setStatusLikeCourse(false);
      try {
        const res = await FeedBackApi.unlikeCourse(courseDetail.id);
      } catch (error) {
        console.log(error);
      }
    }
    // likeStatus == likeTutorIcon ? setStatusLikeCourse(unLikeTutorIcon) : setStatusLikeCourse(likeTutorIcon);
  };

  const togglePopupShareLink = () => {
    setShareLink(false);
  };

  const togglePopupEnroll = () => {
    setSubcribe(false);
  };

  const togglePopUpReport = () => {
    setReport(false);
  };

  return (
    <>
      <ShareLink
        togglePopup={(value) => togglePopupShareLink(value)}
        isOpen={shareLink}
      />
      <ReportCourse
        togglePopup={(value) => togglePopUpReport(value)}
        isOpen={report}
      />
      <Enroll
        togglePopup={(value) => togglePopupEnroll(value)}
        isOpen={subcribe}
      />
      <Header />
      <>
        <Container style={{ background: "#e8e9ec" }} fixed>
          <Grid container spacing={10}>
            <Grid style={{ marginTop: 30 }} item xs={12} sm={4}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <ImportContacts />
                    </Avatar>
                  }
                  action={
                    <>
                      <IconButton
                        ref={anchorRef}
                        aria-controls={open ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        aria-label="settings"
                      >
                        <MoreVertIcon />
                      </IconButton>

                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  autoFocusItem={open}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown}
                                >
                                  <MenuItem onClick={handleSubcribe}>
                                    Ghi danh
                                  </MenuItem>
                                  <MenuItem onClick={handleReport}>
                                    Báo cáo
                                  </MenuItem>
                                  {/* <MenuItem onClick={handleClose}>
                                    Logout
                                  </MenuItem> */}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </>
                  }
                  title={
                    <Typography
                      style={{ maxWidth: 270 }}
                      noWrap
                      gutterBottom
                      variant="h4"
                      component="h2"
                    >
                      {courseDetail.name}
                    </Typography>
                  }
                  subheader={courseDetail.description}
                />
                <CardMedia
                  className={classes.media}
                  image={courseDetail.avatar}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: 15 }}
                  >
                    {courseDetail.overview}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={LikeCourse}
                    aria-label="add to favorites"
                  >
                    {likeStatus ? (
                      <Icon style={{ color: "red" }}>favorite</Icon>
                    ) : (
                      <Icon>favorite_border</Icon>
                    )}
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon onClick={() => setShareLink(true)} />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography noWrap gutterBottom variant="h5" component="h2">
                      Why take this course?
                    </Typography>
                    <Typography noWrap gutterBottom variant="h5" component="h2">
                      What will you be abe to do?
                    </Typography>

                    <Typography noWrap gutterBottom variant="h5" component="h2">
                      Experience Level
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: 15 }}
                    >
                      Level {courseDetail.level}
                    </Typography>
                    <Typography noWrap gutterBottom variant="h5" component="h2">
                      Pre-requisites
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontSize: 15 }}
                    >
                      {courseDetail.prerequisites}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item style={{ marginTop: 30 }} xs={12} sm={8}>
              <Card>
                <CardContent>
                  <List
                    component="nav"
                    subheader={
                      <Typography
                        noWrap
                        gutterBottom
                        variant="h4"
                        component="h2"
                      >
                        List Lesson
                      </Typography>
                    }
                    aria-labelledby="nested-list-subheader"
                  >
                    {showLesson()}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Card
            style={{
              marginTop: 30,
              textAlign: "center",
            }}
          >
            <CardHeader
              title={
                <Typography
                  style={{ maxWidth: 270 }}
                  noWrap
                  gutterBottom
                  variant="h4"
                  component="h2"
                >
                  Other Courses
                </Typography>
              }
            />
            <CardContent>
              <SC.Painn>
                <SC.RelativeCoursesList>
                  {showRelativeCourse()}
                </SC.RelativeCoursesList>
              </SC.Painn>
            </CardContent>
          </Card>
        </Container>
      </>

      {/* <SC.Container>
        <SC.LeftGroup>
          <SC.Avatar>
            <SC.Love onClick={LikeCourse}>
              <SC.Heart src={heartActive} />
            </SC.Love>
            <SC.Image src={courseDetail.avatar} />
            <SC.Title>{courseDetail.name}</SC.Title>
            <SC.SubcribeBtn onClick={() => setSubcribe(true)}>
              Ghi danh
            </SC.SubcribeBtn>
            <SC.ShareBtn onClick={() => setShareLink(true)}>
              <SC.ShareIcon src={iconShare} />
              Chia sẻ
            </SC.ShareBtn>
          </SC.Avatar>
        </SC.LeftGroup>
        <SC.RightGroup>
       
          <SC.SubTitle>Why take this course?</SC.SubTitle>
          <SC.Description></SC.Description>
          <SC.SubTitle>What will you be abe to do?</SC.SubTitle>
          <SC.Description></SC.Description>
          <SC.SubTitle>Experience Level</SC.SubTitle>
          <SC.Description>Level {courseDetail.level}</SC.Description>
          <SC.SubTitle>Course Length</SC.SubTitle>
          <SC.Description>{lesson.length} lessons</SC.Description>
          <SC.SubTitle>Pre-requisites</SC.SubTitle>
          <SC.Description>{courseDetail.prerequisites}</SC.Description>
          <SC.SubTitle>Syllabus</SC.SubTitle>
          <SC.Pain />
          {showLesson()}
        </SC.RightGroup>
      </SC.Container> */}
      {/* <SC.Painn>
        <SC.OtherCourse>Other Courses</SC.OtherCourse>
        <SC.RelativeCoursesList>{showRelativeCourse()}</SC.RelativeCoursesList>
      </SC.Painn> */}
      <Footer />
    </>
  );
};

export default CourseDetailPage;
