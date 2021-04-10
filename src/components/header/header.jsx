import React, { useState } from "react";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";
import LogoSmall from "../../assets/images/LogoSmall.png";
import MessageIcon from "../../assets/images/messageIcon.png";
import CalendarIcon from "../../assets/images/calendarIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { ToggleListChat } from "../../features/messenger/messageSlide";
import { ToggleCalender } from "../calender/calenderSlide";
import { ToggleSmallScreen } from "../controlSlide";
const Header = (props) => {
  const isLogin = useSelector((state) => state.login.checkLogin);
  const { language } = useSelector((state) => state);
  const { image } = useSelector((state) => state.userprofile);
  const dispatch = useDispatch();

  const toggleMessage = () => {
    dispatch(ToggleListChat());
  };

  return (
    <>
      <SC.Container>
        <SC.Logo>
          <SC.Img src={logo} />
          <SC.ImgSmall src={LogoSmall} />
          <SC.Lin to="/" />
        </SC.Logo>
        {isLogin ? (
          <>
            <SC.TutorLink to="/tutors">{language.tutors}</SC.TutorLink>
            <SC.CoursesLink to="/courses">{language.courses}</SC.CoursesLink>
            <SC.Group>
              <SC.BtnSubcribe>{language.subcribe}</SC.BtnSubcribe>
              <SC.Message onClick={toggleMessage}>
                <SC.Icon src={MessageIcon} />
              </SC.Message>
              <SC.CalenDar onClick={() => dispatch(ToggleCalender())}>
                <SC.Icon src={CalendarIcon} />
              </SC.CalenDar>
              <SC.btnAvatar to="/userprofile">
                <SC.Avatar src={image} />
              </SC.btnAvatar>
              <SC.Menu onClick={() => dispatch(ToggleSmallScreen())} />
            </SC.Group>
          </>
        ) : (
          <>
            <SC.BtnLogIn to="/login">Log In</SC.BtnLogIn>
            <SC.BtnSignUp to="/signup">Sign Up</SC.BtnSignUp>
          </>
        )}
      </SC.Container>
      <SC.SubContainer />
      <SC.Line />
    </>
  );
};

export default Header;
