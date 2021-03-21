import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Course from "./components/course/course";
import SearchCourse from "./components/searchCourse";
import { getCourses } from "./coursesSlide";
import * as SC from "./style.js";

const ListCourses = (props) => {
  const listCurriculums = useSelector((state) => state.courses.curriculums);
  const SearchCourses = useSelector(
    (state) => state.courses.listCoursesWhenSearch
  );
  const dispatch = useDispatch();

  useEffect(async () => {
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

    if (listCurriculums.length > 0) {
      const result = listCurriculums.map((curr) => {
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
    return <h3>Data Is Loading...</h3>;
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
