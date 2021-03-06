import { combineReducers } from "@reduxjs/toolkit";
import controlapp from "../components/controlSlide";
import tutors from "./listTutors/tutorSlide";
import courses from "./listCourses/coursesSlide";
import homepage from "./homePage/homePageSlice";
import login from "../app/authSlide/loginSlide";
import signup from "../app/authSlide/signUpSlide";
import jitsi from "./jitsi/jitsiSlide";
import feedback from "./feedBack/feedBackSlide";
import language from "../lang/translateSlide";
import userprofile from "./setting/userProfileSlide";
import message from "./messenger/messageSlide";
import calender from "../components/calender/calenderSlide";
import notification from "./notification/notificationSlide";

const RootReducers = combineReducers({
  controlapp,
  tutors,
  courses,
  login,
  signup,
  homepage,
  jitsi,
  feedback,
  language,
  userprofile,
  message,
  calender,
  notification,
});

export default RootReducers;
