import Header from "../../../../components/header/header";
import Footer from "../../../../components/footer";
import * as SC from "./style";
import { useEffect, useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import { useDispatch, useSelector } from "react-redux";
import Ripples from "react-ripples";
import SlideShow from "../SlideShow";
import { TogglePopUpSlide } from "../../coursesSlide";

const LessonDetailPage = (props) => {
  const { idLesson } = props.match.params;
  const { id } = props.match.params;
  const [lesson, setLesson] = useState({});
  const [courseDetail, setCourse] = useState({});
  const dispatch = useDispatch();
  let indexx;

  useEffect(async () => {
    const params = { idLesson, courseId: id };
    const response = await CurriculumsApi.getLessonDetail(params);
    console.log(response);
    setLesson(response);
  }, [props.match.url]);

  useEffect(async () => {
    const response = await CurriculumsApi.getCourseDetail(id);
    setCourse(response);
  }, []);

  const showLesson = () => {
    if (courseDetail.lessons) {
      const result = courseDetail.lessons.map((les, index) => {
        if (les.id == idLesson) {
          indexx = index + 1;
        }
        return (
          <Ripples color="rgba(255,255,255,0.5)" during="1500">
            <SC.Linkk
              to={`/courses/${id}/${les.id}`}
              style={{
                padding: "15px",
                background: les.id == idLesson ? "#2F8C92" : "",
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
          </Ripples>
        );
      });
      return result;
    } else {
      return <h1>no data</h1>;
    }
  };

  const showPreparSlide = () => {
    if (!lesson.prepareSlides) return;
    const result = lesson.prepareSlides.map((item) => {
      return (
        <SC.BeforeImg
          onClick={() => dispatch(TogglePopUpSlide())}
          src={item.imageLink}
        />
      );
    });
    return result;
  };

  const showSlide = () => {
    if (!lesson.slides) return;
    const result = lesson.slides.map((item) => {
      return (
        <SC.BeforeImg
          onClick={() => dispatch(TogglePopUpSlide())}
          src={item.imageLink}
        />
      );
    });
    return result;
  };

  const showVideos = () => {
    if (!lesson.videos) return;
    const result = lesson.videos.map((item) => {
      return <SC.Videos controls src={item.videoUrl} />;
    });
    return result;
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
          <SC.SubTitlee>Before the Lesson</SC.SubTitlee>
          <SC.Review>Review these slides to prepare for your lesson</SC.Review>
          <SC.PreparGroup>{showPreparSlide()}</SC.PreparGroup>
          <SC.SubTitlee>Lesson Slide</SC.SubTitlee>
          <SC.PreparGroup>{showSlide()}</SC.PreparGroup>
          <SC.SubTitlee>Review Lesson Videos</SC.SubTitlee>
          <SC.PreparGroup>{showVideos()}</SC.PreparGroup>
        </SC.RightGroup>
      </SC.Container>
      <Footer />
      <SlideShow />
    </>
  );
};

export default LessonDetailPage;
