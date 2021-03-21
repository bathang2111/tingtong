import React, { useState } from "react";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";
import MessageIcon from "../../assets/images/messageIcon.png";
import CalendarIcon from "../../assets/images/calendarIcon.png";
import { useSelector } from "react-redux";
import AvatarImg from "../../assets/images/avatar4.png";
const Header = (props) => {
  const isLogin = useSelector((state) => state.login.checkLogin);

  return (
    <>
      <SC.Container>
        <SC.Logo>
          <SC.Img src={logo} />
          <SC.Lin to="/" />
        </SC.Logo>
        {isLogin ? (
          <>
            <SC.TutorLink to="/student/tutors">Gia Sư</SC.TutorLink>
            <SC.CoursesLink to="/courses">khóa học</SC.CoursesLink>
            <SC.Group>
              <SC.BtnSubcribe>SUBCRIBE</SC.BtnSubcribe>
              <SC.Message>
                <SC.Icon src={MessageIcon} />
              </SC.Message>
              <SC.CalenDar>
                <SC.Icon src={CalendarIcon} />
              </SC.CalenDar>
              <SC.btnAvatar to="/userprofile">
                <SC.Avatar src={AvatarImg} />
              </SC.btnAvatar>
            </SC.Group>
          </>
        ) : (
          <>
            <SC.BtnLogIn to="/login">Log In</SC.BtnLogIn>
            <SC.BtnSignUp>Sign Up</SC.BtnSignUp>
          </>
        )}
      </SC.Container>
      <SC.Line/>
    </>
  );
};

export default Header;
