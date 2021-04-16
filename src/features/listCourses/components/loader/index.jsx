import * as SC from "./style";

const Loader = (props) => {
  return (
    <SC.Container>
      <SC.TypeOfCourse/>
      <SC.Description/>
      <SC.ListCourses>
        <SC.Item/>
        <SC.Item/>
        <SC.Item/>
        <SC.Item/>
      </SC.ListCourses>
    </SC.Container>
  );
};

export default Loader;
