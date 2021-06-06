import Header from "../../../../components/header/header";
import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CurriculumsApi from "../../../../api/curiculumsApi";
import Footer from "../../../../components/footer";
import { getCourses, setCourseDetail } from "../../coursesSlide";
import iconShare from "../../../../assets/images/iconShare.png";
import LoveIcon from "../../../../assets/images/Love.png";
import LoveIconActive from "../../../../assets/images/iconHeart.png";
import Ripples from "react-ripples";
import ShareLink from "../shareLink";
import Enroll from "../enroll"
import FeedBackApi from "../../../../api/feedbackApi";

const CourseDetailPage = (props) => {
  const id = props.match.params.id;
  const url = props.match.url;
  const { courseDetail } = useSelector((state) => state.courses);
  const [lesson, setLessons] = useState({ listLessons: [], length: 0 });
  const { curriculums } = useSelector((state) => state.courses);
  const [relativeCourse, setRela] = useState([]);
  const dispatch = useDispatch();
  const [shareLink, setShareLink] = useState(false);
  const [subcribe, setSubcribe] = useState(false);
  const [heartActive, setActive] = useState(LoveIcon);

  useEffect(async () => {
    const response = await CurriculumsApi.getCourseDetail(id);
    dispatch(setCourseDetail(response));
    setLessons({
      listLessons: response.lessons,
      length: response.lessons.length,
    });
  }, [id]);

  useEffect(async () => {
    if (curriculums.length == 0) {
      await dispatch(getCourses());
    }
  }, []);

  useEffect(() => {
    if (curriculums.length == 0) return;
    if (!courseDetail.id) return;
    const rela = curriculums.filter((item) => {
      return item.id == courseDetail.curriculumID;
    });
    setRela(rela[0].courses);
  }, [curriculums, courseDetail]);

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
    const re = relativeCourse.map((item) => {
      if (item.id == courseDetail.id) return;
      return (
        <SC.RelativeCourse to={`/courses/${item.id}`}>
          <SC.RelaImage src={item.avatar} />
          <SC.RelaTitle>{item.name}</SC.RelaTitle>
          <SC.RelaDescription>{item.description}</SC.RelaDescription>
        </SC.RelativeCourse>
      );
    });
    return re;
  };

  const togglePopup = () => {
    setShareLink(false);
  };

  const togglePopup2 = () => {
    setSubcribe(false);
  };

  const LikeCourse = async () => {
    if (heartActive == LoveIcon) {
      setActive(LoveIconActive);
      try {
        const res = await FeedBackApi.likeCourse(id)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }else{
      setActive(LoveIcon)
    }
    // heartActive == LoveIcon ? setActive(LoveIconActive) : setActive(LoveIcon);
  };


  return (
    <>
      <ShareLink
        togglePopup={(value) => togglePopup(value)}
        isOpen={shareLink}
      />
      <Enroll
        togglePopup={(value) => togglePopup2(value)}
        isOpen={subcribe}
      />
      <Header />
      <SC.Container>
        <SC.LeftGroup>
          <SC.Avatar>
            <SC.Love onClick={LikeCourse}>
              <SC.Heart src={heartActive} />
            </SC.Love>
            <SC.Image src={courseDetail.avatar} />
            <SC.Title>{courseDetail.name}</SC.Title>
            <SC.SubcribeBtn onClick={() => setSubcribe(true)}>
              Ghi danh
            </SC.SubcribeBtn>
            <SC.ShareBtn onClick={() => setShareLink(true)}>
              <SC.ShareIcon src={iconShare} />
              Chia sẻ
            </SC.ShareBtn>
          </SC.Avatar>
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

      <SC.Painn>
        <SC.OtherCourse>Other Courses</SC.OtherCourse>
        <SC.RelativeCoursesList>{showRelativeCourse()}</SC.RelativeCoursesList>
      </SC.Painn>

      <Footer />
    </>
  );
};

export default CourseDetailPage;
