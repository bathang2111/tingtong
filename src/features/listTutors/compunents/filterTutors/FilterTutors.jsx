import { useSelector } from "react-redux";
import PossFiltersForm from "../../../../assets/possFiltersForm/possFiltersForm";
import * as SC from "./style";

const FilterTutors = (props) => {
  const listTutors = useSelector((state) => state.tutors);

  const onHandleSubmit = (value) => {
    console.log(value);
  };

  return (
    <SC.Container>
      <SC.Title>Find a Tutor</SC.Title>
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
