import { combineReducers } from "@reduxjs/toolkit";
import tutors from "./listTutors/tutorSlide";
import courses from "./listCourses/coursesSlide";
import homepage from "./homePage/homePageSlice";
import login from "../app/authSlide/loginSlide";

const RootReducers = combineReducers({
  tutors,
  courses,
  login,
  homepage,
});

export default RootReducers;
