import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Grid,
  Button,
} from "@material-ui/core";
import CurriculumsApi from "../../../api/curiculumsApi";
import ItemCourse from "../../listCourses/components/itemCourse/ItemCourse";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: "#e8e9ec",
  },
  title: {
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
  },
  list: {
    minWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CoursesSaved() {
  const classes = useStyles();
  const [course, setCourse] = useState([]);

  useEffect(async () => {
    try {
      const res = await CurriculumsApi.getCoursesEnroll();
      setCourse(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showLisCourseSaved = () => {
    if (course.length == 0) return;
    const result = course.map((item) => {
      return (
        <div style={{padding: "0 10px" }}>
          <ItemCourse course={item} />
        </div>
      );
    });
    return result;
    // const asd = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    // const resu = asd.map(() => {
    //   return result;
    // });
    // return resu;
  };

  return (
    <Container className={classes.root}>
      <Card className={classes.root}>
        <CardHeader
          className={classes.title}
          title={
            <Typography className={classes.title} variant="h3" component="h2">
              Các khóa học đã lưu
            </Typography>
          }
        />
        <CardContent className={classes.content}>
          {showLisCourseSaved()}
        </CardContent>
      </Card>
    </Container>
  );
}
