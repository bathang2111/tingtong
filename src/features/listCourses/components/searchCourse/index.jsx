import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import PossFiltersForm from "../../../../assets/possFiltersForm/possFiltersForm";
import { getCoursesByKeyWord, RemoveNoResult } from "../../coursesSlide";
import * as SC from "./style";

const SearchCourse = (props) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);

  const onHandleSubmit = async (value) => {
    console.log("dsadsad");
    if (value.SearchTerm == "") {
      dispatch(RemoveNoResult());
      return;
    }
    await dispatch(getCoursesByKeyWord(value.SearchTerm));
  };

  return (
    <SC.Container>
      <Typography
        variant="h3"
        component="h5"
        style={{ padding: "20px 0", color: "#fff" }}
      >
        Tìm kiếm khóa học
      </Typography>
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
