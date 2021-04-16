import { useDispatch, useSelector } from "react-redux";
import PossFiltersForm from "../../../../assets/possFiltersForm/possFiltersForm";
import { getCoursesByKeyWord } from "../../coursesSlide";
import * as SC from "./style";

const SearchCourse = (props) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);

  const onHandleSubmit = async (value) => {
    if (value.SearchTerm == "") {
      await dispatch(getCoursesByKeyWord("hom nay em di chua huong"));
      return;
    }
    await dispatch(getCoursesByKeyWord(value.SearchTerm));
  };

  return (
    <SC.Container>
      <SC.Title>{language.searchCourses}</SC.Title>
      <SC.SubTitleGroup>
        <SC.BookImage />
        <SC.SubTitle>
          Looking for material to guide your lessons? Choose one of our course
          offerings below
        </SC.SubTitle>
      </SC.SubTitleGroup>
      {/* form tim kiem */}
      <SC.SeachCoursesGroup>
        <PossFiltersForm
          onSubmit={onHandleSubmit}
          placeholder={language.plHolderCourse}
        />
      </SC.SeachCoursesGroup>
    </SC.Container>
  );
};

export default SearchCourse;
