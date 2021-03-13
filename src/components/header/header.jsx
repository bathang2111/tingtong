import React, { useState } from "react";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";
import MessageIcon from "../../assets/images/messageIcon.png";
import CalendarIcon from "../../assets/images/calendarIcon.png";
import { useSelector } from "react-redux";
const Header = (props) => {
  const isLogin = useSelector((state) => state.login.checkLogin);

  return (
    <SC.Container>
      <SC.Logo onClick={() => {}}>
        <SC.Img src={logo} />
        <SC.Lin to="/" />
      </SC.Logo>
      {isLogin ? (
        <>
          <SC.TutorLink to="/student/tutors">Turtor</SC.TutorLink>
          <SC.CoursesLink to="/courses">Courses</SC.CoursesLink>
          <SC.Group>
            <SC.BtnSubcribe>SUBCRIBE</SC.BtnSubcribe>
            <SC.Message>
              <SC.Img src={MessageIcon} />
            </SC.Message>
            <SC.CalenDar>
              <SC.Img src={CalendarIcon} />
            </SC.CalenDar>
            <SC.Avatar />
          </SC.Group>
        </>
      ) : (
        <>
          <SC.BtnLogIn to="/login">Log In</SC.BtnLogIn>
          <SC.BtnSignUp>Sign Up</SC.BtnSignUp>
        </>
      )}
    </SC.Container>
  );
};

export default Header;
