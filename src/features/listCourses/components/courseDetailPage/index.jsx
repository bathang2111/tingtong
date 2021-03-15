import Header from "../../../../components/header/header";
import * as SC from "./style";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import Footer from "../../../../components/footer";

const CourseDetailPage = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const [DetailCourse, setDetaiCourse] = useState({});

  useEffect(async () => {
    const response = await CurriculumsApi.getCourseDetail(id);
    setDetaiCourse(response);
  }, []);

  return (
    <>
      <Header />
      <SC.Container>
        <SC.LeftGroup>
          <SC.Avatar>
            <SC.Image src={DetailCourse.avatar} />
            <SC.Title>{DetailCourse.name}</SC.Title>
          </SC.Avatar>
          <SC.OtherCourse>Other Courses</SC.OtherCourse>
        </SC.LeftGroup>
        <SC.RightGroup>
          <SC.OverView>OverView</SC.OverView>
          <SC.Description>{DetailCourse.overview}</SC.Description>
          <SC.SubTitle>Why take this course?</SC.SubTitle>
          <SC.Description></SC.Description>
          <SC.SubTitle>What will you be abe to do?</SC.SubTitle>
          <SC.Description></SC.Description>
          <SC.SubTitle>Experience Level</SC.SubTitle>
          <SC.Description>Level {DetailCourse.level}</SC.Description>
          <SC.SubTitle>Course Length</SC.SubTitle>
          <SC.Description></SC.Description>
          <SC.SubTitle>Pre-requisites</SC.SubTitle>
          <SC.Description>{DetailCourse.prerequisites}</SC.Description>
          <SC.SubTitle>Syllabus</SC.SubTitle>
          <SC.Description></SC.Description>
        </SC.RightGroup>
        <Footer/>
      </SC.Container>
    </>
  );
};

export default CourseDetailPage;
