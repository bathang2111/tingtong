import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Course from "./components/course/course";
import SearchCourse from "./components/searchCourse";
import { getCourses, RemoveNoResult } from "./coursesSlide";
import Error from "../../components/error";
import * as SC from "./style.js";
import Loader from "./components/loader";
import ItemCurriculum from "./components/curriculum/ItemCurriculum";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import CuriculumsApi from "../../api/curiculumsApi";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import ItemCourse from "./components/itemCourse/ItemCourse";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
}));
const ListCourses = (props) => {
  const [curriculums, setCurriculums] = useState([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { listCoursesWhenSearch, noResult } = useSelector(
    (state) => state.courses
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(async () => {
    getCurriculums(limit, page);
  }, [page]);

  const showListCourses = () => {
    if (noResult) {
      return (
        <Card
          style={{
            width: "100%",
            height: 150,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h3" component="h5">
            Không tìm thấy kết quả!
          </Typography>
          <Button
            onClick={() => dispatch(RemoveNoResult())}
            variant="contained"
            color="primary"
          >
            Đồng ý
          </Button>
        </Card>
      );
    }
    if (listCoursesWhenSearch.length > 0) {
      const result = (
        <Grid
          item
          container
          direction="row"
          justify="start"
          alignItems="center"
        >
          {listCoursesWhenSearch.map((item) => {
            return (
              <Grid row xs={6} md={3}>
                <ItemCourse course={item}></ItemCourse>
              </Grid>
            );
          })}
        </Grid>
      );
      return result;
    }
    if (isLoading) {
      return <Loader />;
    } else if (isError) {
      return <Error />;
    } else {
      const result = curriculums.map((curr) => {
        return <ItemCurriculum curriculum={curr}></ItemCurriculum>;
      });
      return result;
    }
  };

  const getCurriculums = async (limit, page) => {
    CuriculumsApi.getCurriculums(limit, page)
      .then((res) => {
        setCurriculums(res.list);
        setTotal(res.totalPages);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      <Header />
      <SearchCourse />
      <SC.Container>
        <Typography
          style={{ magin: 0, fontSize: "2.1rem", marginTop: "24px" }}
          gutterBottom
          variant="h5"
          component="h5"
        >
          Khám phá các Khóa học
        </Typography>
        {showListCourses()}
      </SC.Container>
      <div className={classes.pagination}>
        <Pagination
          size="large"
          color="primary"
          count={total}
          page={page}
          siblingCount={0}
          onChange={handleChange}
        />
      </div>
      <Footer />
    </>
  );
};
export default ListCourses;
