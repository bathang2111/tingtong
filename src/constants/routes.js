import React from "react";
import HomePage from "../features/homePage";
import LogIn from "../features/logIn";
import ListCourses from "../features/listCourses/index";
import CallVideo from "../features/jitsi";
import CourseDetailPage from "../features/listCourses/components/courseDetailPage";
import SignUp from "../features/signUp";
import HomePageStudent from "../features/homePage/homePageStudent";
import ListTutors from "../features/listTutors";

export const Routes = [
  {
    name: "HomePage",
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    name: "HomePageStudent",
    path: "/student",
    exact: true,
    main: () => <HomePageStudent />,
  },
  {
    name: "ListTutors",
    path: "/student/tutors",
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
    exact: false,
    main: ({ match }) => <CourseDetailPage match={match} />,
  },
  {
    name: "Jitsi",
    path: "/jitsi",
    exact: false,
    main: () => <CallVideo />,
  },
];
