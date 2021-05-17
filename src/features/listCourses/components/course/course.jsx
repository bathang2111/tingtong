import React from "react";
import * as SC from "./style";
import Ripples from "react-ripples";

const Course = (props) => {
  const url = props.match.url;
  const endpoint = props.course.id;
  return (
    <SC.Container>
      <Ripples during="2000">
        <SC.CourseDetail to={`${url}/${endpoint}`}>
          <SC.Img src={props.course.avatar} />
          <SC.Title>{props.course.name}</SC.Title>
          <SC.SubTitle>{props.course.description}</SC.SubTitle>
          <SC.Cover></SC.Cover>
        </SC.CourseDetail>
      </Ripples>
    </SC.Container>
  );
};

export default Course;
