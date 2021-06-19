import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Course from "./components/course/course";
import SearchCourse from "./components/searchCourse";
import { getCourses } from "./coursesSlide";
import Error from "../../components/error";
import * as SC from "./style.js";
import Loader from "./components/loader";
import ItemCurriculum from "./components/curriculum/ItemCurriculum";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({

  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2)
  }

}));
const ListCourses = (props) => {
  const Curriculums = useSelector((state) => state.courses);
  const SearchCourses = useSelector(
    (state) => state.courses.listCoursesWhenSearch
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(async () => {
    if (Curriculums.curriculums.length > 0) return;
    try {
      await dispatch(getCourses());
      // const action = getCourses();
      // const result = await dispatch(action);
      // console.log(unwrapResult(result));
      // setListCourses(unwrapResult(result));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showListCourses = () => {

    if (Curriculums.loading) {
      return <Loader />;
    } else if (Curriculums.error) {
      return <Error />;
    } else {
      const result = Curriculums.curriculums.map((curr) => {
        return (
          <ItemCurriculum curriculum={curr}></ItemCurriculum>
        );
      });
      return result;
    }
  };

  return (
    <>
      <Header />
      <SearchCourse />
      <SC.Container>
        <Typography style={{ 'magin': 0, 'fontSize': '2.1rem', 'marginTop': '24px' }} gutterBottom variant="h5" component="h5">
          Khám phá các Khóa học
        </Typography>
        {showListCourses()}
      </SC.Container>
      <div className={classes.pagination}>
        <Pagination size="large" color="primary" count={10} page={page} siblingCount={0} onChange={handleChange} />
      </div>
      <Footer />
    </>
  );
};
export default ListCourses;
