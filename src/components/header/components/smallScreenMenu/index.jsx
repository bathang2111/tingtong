import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import { ToggleSmallScreen } from "../../../controlSlide";

const SmallScreenMenu = (props) => {
  const { language } = useSelector((state) => state);
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state) => state.controlapp.SmallScreenHeaderStatus
  );

  const logOut=()=>{
    localStorage.clear();
    window.location.reload();
  }

  return (
    <SC.Container
      onRequestClose={() => dispatch(ToggleSmallScreen())}
      style={{
        overlay: {
          background: "none",
          zIndex: "10",
        },
      }}
      isOpen={isOpen}
    >
      <SC.Linkk onClick={()=>dispatch(ToggleSmallScreen())} to="/tutors">{language.tutors=="TUTORS"?"Tutors":"Gia Sư"}</SC.Linkk>
      <SC.Linkk onClick={()=>dispatch(ToggleSmallScreen())} to="/courses" >{language.courses=="COURSES"?"Courses":"Khóa Học"}</SC.Linkk>
      <SC.Linkk onClick={()=>dispatch(ToggleSmallScreen())} to="/userprofile" >{language.userProfile}</SC.Linkk>
      <SC.Linkk onClick={logOut} >{language.logOut}</SC.Linkk>
    </SC.Container>
  );
};

export default SmallScreenMenu;
