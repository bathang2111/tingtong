import { useDispatch, useSelector } from "react-redux";
import PossFiltersForm from "../../../../assets/possFiltersForm/possFiltersForm";
import { getTutorsByKeyWord } from "../../tutorSlide";
import * as SC from "./style";

const FilterTutors = (props) => {
  const listTutors = useSelector((state) => state.tutors);
  const { language } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandleSubmit = async (value) => {
    // const res = await CurriculumsApi.getCoursesByKeyWord(value);
    console.log(value.SearchTerm);
    await dispatch(getTutorsByKeyWord(value.SearchTerm));
  };

  return (
    <SC.Container>
      <SC.Title>{language.searchTutor}</SC.Title>
      <SC.ButtonGroup>
        <SC.Button>{language.btnLessonlevel}</SC.Button>
        <SC.Button>{language.btnTutorAccent}</SC.Button>
        <SC.Button>{language.btnTutorPersonality}</SC.Button>
        <SC.Button>{language.btnAvallability}</SC.Button>
      </SC.ButtonGroup>
      {/* form tim kiem */}
      <SC.SearchTutorsGroup>
        <PossFiltersForm
          onSubmit={onHandleSubmit}
          placeholder={language.plHolderTutor}
        />
      </SC.SearchTutorsGroup>
    </SC.Container>
  );
};

export default FilterTutors;
