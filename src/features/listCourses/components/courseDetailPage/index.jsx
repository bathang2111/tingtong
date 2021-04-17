import Header from "../../../../components/header/header";
import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import Footer from "../../../../components/footer";
import { setCourseDetail } from "../../coursesSlide";
import Course from "../course/course";

const CourseDetailPage = (props) => {
  const id = props.match.params.id;
  const url = props.match.url;
  const { courseDetail } = useSelector((state) => state.courses);
  const [lesson, setLessons] = useState({ listLessons: [], length: 0 });
  const dispatch = useDispatch();

  useEffect(async () => {
    console.log("da choi");
    const response = await CurriculumsApi.getCourseDetail(id);
    dispatch(setCourseDetail(response));
    setLessons({
      listLessons: response.lessons,
      length: response.lessons.length,
    });
  }, [courseDetail]);

  const showLesson = () => {
    const result = lesson.listLessons.map((les, index) => {
      const endPoint = les.id;
      return (
        <SC.Linkk to={`${url}/${endPoint}`}>
          <SC.Description>
            {index + 1} : {les.title}
          </SC.Description>
          <SC.Pain />
        </SC.Linkk>
      );
    });
    return result;
  };

  const showRelativeCourse = () => {
    const a = [1, 2, 3, 4, 5];
    const re = a.map((item) => {
      return <Course match={{url:null}} course={{id:null}} />;
    });
    return re;
  };

  return (
    <>
      <Header />
      <SC.Container>
        <SC.LeftGroup>
          <SC.Avatar>
            <SC.Image src={courseDetail.avatar} />
            <SC.Title>{courseDetail.name}</SC.Title>
          </SC.Avatar>
          <SC.OtherCourse>Other Courses</SC.OtherCourse>
          <SC.RelativeCourses>{showRelativeCourse()}</SC.RelativeCourses>
        </SC.LeftGroup>
        <SC.RightGroup>
          <SC.OverView>OverView</SC.OverView>
          <SC.Description>{courseDetail.overview}</SC.Description>
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
      </SC.Container>
      <Footer />
    </>
  );
};

export default CourseDetailPage;
