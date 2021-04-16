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

const ListCourses = (props) => {
  const Curriculums = useSelector((state) => state.courses);
  const SearchCourses = useSelector(
    (state) => state.courses.listCoursesWhenSearch
  );
  const dispatch = useDispatch();

  useEffect(async () => {
    if (Curriculums.curriculums.length > 0) return;
    try {
      await dispatch(getCourses());
      console.log("ham dang chay");
      // const action = getCourses();
      // const result = await dispatch(action);
      // console.log(unwrapResult(result));
      // setListCourses(unwrapResult(result));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const showListCourses = () => {
    if (SearchCourses.length > 0) {
      const result = SearchCourses.map((course) => {
        return <Course key={course.id} course={course} match={props.match} />;
      });
      return (
        <SC.Container style={{ marginTop: "20px" }}>
          <SC.ListCourses>{result}</SC.ListCourses>
        </SC.Container>
      );
    }

    if (Curriculums.loading) {
      return <Loader />;
    } else if (Curriculums.error) {
      return <Error />;
    } else {
      const result = Curriculums.curriculums.map((curr) => {
        const listCourses = curr.courses.map((course) => {
          return <Course key={course.id} course={course} match={props.match} />;
        });
        return (
          <SC.Container>
            <SC.TypeOfCourse>{curr.title}</SC.TypeOfCourse>
            <SC.Description>{curr.description}</SC.Description>
            <SC.ListCourses>{listCourses}</SC.ListCourses>
          </SC.Container>
        );
      });
      return result;
    }
  };

  return (
    <>
      <Header />
      <SearchCourse />
      {showListCourses()}
      {/* <SC.Container>
        <SC.TypeOfCourse>beginner</SC.TypeOfCourse>
        <SC.ListCourses>{showListCourses()}</SC.ListCourses>
        <SC.TypeOfCourse>intermediate</SC.TypeOfCourse>
        <SC.ListCourses>{showListCourses()}</SC.ListCourses>
        <SC.TypeOfCourse>advanced</SC.TypeOfCourse>
        <SC.ListCourses>{showListCourses()}</SC.ListCourses>
        <SC.TypeOfCourse>english exam</SC.TypeOfCourse>
        <SC.ListCourses>{showListCourses()}</SC.ListCourses>
      </SC.Container> */}
      <Footer />
    </>
  );
};
export default ListCourses;
