import * as SC from "./style";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { ToggleCalender } from "./calenderSlide";

const Calender = (props) => {
  const { isOpen } = useSelector((state) => state.calender);
  const dispatch =useDispatch()
  return (
    <SC.Container
      isOpen={isOpen}
        onRequestClose={()=>dispatch(ToggleCalender())}
      style={{
        overlay: {
          background: "none",
          zIndex: 10,
        },
      }}
    >
      <Calendar className="react-calendar" />
    </SC.Container>
  );
};

export default Calender;
