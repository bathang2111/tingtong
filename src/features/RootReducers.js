import { combineReducers } from "@reduxjs/toolkit";
import tutors from "./listTutors/tutorSlide";
import courses from "./listCourses/coursesSlide";
import homepage from "./homePage/homePageSlice";
import login from "../app/authSlide/loginSlide";
import signup from "../app/authSlide/signUpSlide";
import jitsi from "./jitsi/jitsiSlide";
import feedback from "./feedBack/feedBackSlide";

const RootReducers = combineReducers({
  tutors,
  courses,
  login,
  signup,
  homepage,
  jitsi,
  feedback,
});

export default RootReducers;
