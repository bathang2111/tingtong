import { useRef, useState } from "react";
import * as SC from "./style";

const PossFiltersForm = (props) => {
  const [SearchTerm, setSearchTerm] = useState("");
  const TimeOutRef = useRef(null);

  const onHandleChange = (e) => {
    setSearchTerm(e.target.value);
    const value=e.target.value;

    if(TimeOutRef.current){
        clearTimeout(TimeOutRef.current);
    }

    TimeOutRef.current = setTimeout(() => {
      const formValue = {
        SearchTerm: value,
      };
      props.onSubmit(formValue);
    }, 500);
  };

  return (
    <SC.SearchForm>
      <SC.SubmitButton />
      <SC.InputSearch
        value={SearchTerm}
        onChange={onHandleChange}
        placeholder={props.placeholder}
      />
    </SC.SearchForm>
  );
};

export default PossFiltersForm;
