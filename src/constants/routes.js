import React from "react";
import HomePage from "../features/homePage";
import LogIn from "../features/logIn";
import ListCourses from "../features/listCourses/index";
import CurriculumsPage from "../features/listCurriculums/index";
import CallVideo from "../features/jitsi";
import CourseDetailPage from "../features/listCourses/components/courseDetailPage";
import LessonDetailPage from "../features/listCourses/components/lessonDetailPage";
import SignUp from "../features/signUp";
import HomePageStudent from "../features/homePage/homePageStudent";
import ListTutors from "../features/listTutors";
import SettingPage from "../features/setting/SettingPage";
import Payment from "../features/payment";

export const Routes = [
  {
    name: "WellCome",
    path: "/wellcome",
    exact: true,
    main: () => <HomePage />,
    auth: false
  },
  {
    name: "HomePageStudent",
    path: "/",
    exact: true,
    main: () => <HomePageStudent />,
    auth: true
  },
  {
    name: "ListTutors",
    path: "/tutors",
    exact: false,
    main: ({ match }) => <ListTutors match={match} />,
    auth: true
  },
  {
    name: "LogIn",
    path: "/login",
    exact: false,
    main: () => <LogIn />,
    auth: false
  },
  {
    name: "SignUp",
    path: "/signup",
    exact: false,
    main: () => <SignUp />,
    auth: false
  },
  {
    name: "Courses",
    path: "/courses",
    exact: true,
    main: ({ match }) => <ListCourses match={match} />,
    auth: true
  },
  {
    name: "Courses",
    path: "/curriculums/:id/courses",
    exact: true,
    main: ({ match }) => <CurriculumsPage match={match} />,
    auth: true
  },
  {
    name: "CourseDetailPage",
    path: "/courses/:id",
    exact: true,
    main: ({ match }) => <CourseDetailPage match={match} />,
    auth: true
  },
  {
    name: "LessonDetail",
    path: "/courses/:id/:idLesson",
    exact: true,
    main: ({ match }) => <LessonDetailPage match={match} />,
    auth: true
  },
  {
    name: "Setting",
    path: "/setting",
    exact: false,
    main: () => <SettingPage />,
    auth: true
  },
  {
    name: "Jitsi",
    path: "/video-call/:roomId/:callerId/:receiverId",
    exact: true,
    main: ({ match }) => <CallVideo match={match} />,
    auth: true
  },
  {
    name: "payment",
    path: "/payment",
    exact: false,
    main: () => <Payment />,
    auth: true
  },
];
