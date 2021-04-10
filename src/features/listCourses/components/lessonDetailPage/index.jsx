import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer";
import * as SC from "./style";
import { useEffect, useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import { useSelector } from "react-redux";

const LessonDetailPage = (props) => {
  const { idLesson } = props.match.params;
  const { id } = props.match.params;
  const [lesson, setLesson] = useState({});
  const [courseDetail, setCourse] = useState({});
  let indexx;

  useEffect(async () => {
    const response = await CurriculumsApi.getLessonDetail(idLesson);
    setLesson(response);
  }, [props.match.url]);

  useEffect(async () => {
    const response = await CurriculumsApi.getCourseDetail(id);
    setCourse(response);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const showLesson = () => {
    if (courseDetail.lessons) {
      const result = courseDetail.lessons.map((les, index) => {
        if (les.id == idLesson) {
          indexx = index + 1;
        }
        return (
          <SC.Linkk
            to={`/courses/${id}/${les.id}`}
            style={{
              padding: "15px",
              background: les.id == idLesson ? "#FFC929" : "",
            }}
          >
            <SC.Description
              style={{
                color: les.id == idLesson ? "#ffffff" : "",
              }}
            >
              {index + 1} : {les.title}
            </SC.Description>
          </SC.Linkk>
        );
      });
      return result;
    } else {
      return <h1>aaa</h1>;
    }
  };

  return (
    <>
      <Header />
      <SC.Container>
        <SC.LeftGroup>
          <SC.Avatar>
            <SC.Image src={courseDetail.avatar} />
            <SC.Title>{courseDetail.name}</SC.Title>
            <SC.SubTitle>{courseDetail.description}</SC.SubTitle>
          </SC.Avatar>
          <SC.ListLessons>List Lessons</SC.ListLessons>
          <SC.GroupLesson>{showLesson()}</SC.GroupLesson>
        </SC.LeftGroup>
        <SC.RightGroup>
          <SC.STTLesson>LESSON {indexx}</SC.STTLesson>
          <SC.NameLesson>{lesson.title}</SC.NameLesson>
        </SC.RightGroup>
      </SC.Container>
      <Footer />
    </>
  );
};

export default LessonDetailPage;
