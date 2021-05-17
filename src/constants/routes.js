import React from "react";
import HomePage from "../features/homePage";
import LogIn from "../features/logIn";
import ListCourses from "../features/listCourses/index";
import CallVideo from "../features/jitsi";
import CourseDetailPage from "../features/listCourses/components/courseDetailPage";
import LessonDetailPage from "../features/listCourses/components/lessonDetailPage";
import SignUp from "../features/signUp";
import HomePageStudent from "../features/homePage/homePageStudent";
import ListTutors from "../features/listTutors";
import UserProfile from "../features/userProfile";
import Payment from "../features/payment";

export const Routes = [
  {
    name: "WellCome",
    path: "/wellcome",
    exact: true,
    main: () => <HomePage />,
  },
  {
    name: "HomePageStudent",
    path: "/",
    exact: true,
    main: () => <HomePageStudent />,
  },
  {
    name: "ListTutors",
    path: "/tutors",
    exact: false,
    main: ({ match }) => <ListTutors match={match} />,
  },
  {
    name: "LogIn",
    path: "/login",
    exact: false,
    main: () => <LogIn />,
  },
  {
    name: "SignUp",
    path: "/signup",
    exact: false,
    main: () => <SignUp />,
  },
  {
    name: "Courses",
    path: "/courses",
    exact: true,
    main: ({ match }) => <ListCourses match={match} />,
  },
  {
    name: "CourseDetailPage",
    path: "/courses/:id",
    exact: true,
    main: ({ match }) => <CourseDetailPage match={match} />,
  },
  {
    name: "LessonDetail",
    path: "/courses/:id/:idLesson",
    exact: true,
    main: ({ match }) => <LessonDetailPage match={match} />,
  },
  {
    name: "UserProfile",
    path: "/userprofile",
    exact: false,
    main: () => <UserProfile />,
  },
  {
    name: "Jitsi",
    path: "/video-call/:roomId/:callerId/:receiverId",
    exact: true,
    main: ({ match }) => <CallVideo match={match} />,
  },
  {
    name: "payment",
    path: "/payment",
    exact: false,
    main: () => <Payment />,
  },
];
