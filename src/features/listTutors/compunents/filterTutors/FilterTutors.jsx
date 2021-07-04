import { useDispatch, useSelector } from "react-redux";
import PossFiltersForm from "../../../../assets/possFiltersForm/possFiltersForm";
import { getTutorsByKeyWord, RemoveNoResult } from "../../tutorSlide";
import * as SC from "./style";

const FilterTutors = (props) => {
  const listTutors = useSelector((state) => state.tutors);
  const { language } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandleSubmit = async (value) => {
    if (value.SearchTerm == "") {
      dispatch(RemoveNoResult());
      return;
    }
    // const res = await CurriculumsApi.getCoursesByKeyWord(value);
    await dispatch(getTutorsByKeyWord(value.SearchTerm));
  };

  return (
    <SC.Container>
      <SC.Title>Tìm kiếm gia sư</SC.Title>
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
