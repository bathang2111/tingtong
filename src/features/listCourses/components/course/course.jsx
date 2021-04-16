import React from "react";
import * as SC from "./style";

const Course = (props) => {
  const url = props.match.url;
  const endpoint = props.course.id;
  return (
    <SC.Container>
      <SC.CourseDetail to={`${url}/${endpoint}`}>
        <SC.Img src={props.course.avatar} />
        <SC.Title>{props.course.name}</SC.Title>
        <SC.SubTitle>{props.course.description}</SC.SubTitle>
        <SC.Cover></SC.Cover>
      </SC.CourseDetail>
    </SC.Container>
  );
};

export default Course;
