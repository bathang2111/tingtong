import { useDispatch, useSelector } from "react-redux";
import PossFiltersForm from "../../../../assets/possFiltersForm/possFiltersForm";
import { getTutorsByKeyWord } from "../../tutorSlide";
import * as SC from "./style";

const FilterTutors = (props) => {
  const listTutors = useSelector((state) => state.tutors);
  const dispatch=useDispatch();

  const onHandleSubmit = async (value) => {
    // const res = await CurriculumsApi.getCoursesByKeyWord(value);
    console.log(value.SearchTerm);
    await dispatch(getTutorsByKeyWord(value.SearchTerm));
  };

  return (
    <SC.Container>
      <SC.Title>Tìm Kiếm Gia Sư</SC.Title>
      <SC.ButtonGroup>
        <SC.Button>Lession Level</SC.Button>
        <SC.Button>Tutor Accent</SC.Button>
        <SC.Button>Tutor Personality</SC.Button>
        <SC.Button>Avallability</SC.Button>
      </SC.ButtonGroup>
      {/* form tim kiem */}
      <SC.SearchTutorsGroup>
        <PossFiltersForm
          onSubmit={onHandleSubmit}
          placeholder="Name, Love, Hobby..."
        />
      </SC.SearchTutorsGroup>
    </SC.Container>
  );
};

export default FilterTutors;
