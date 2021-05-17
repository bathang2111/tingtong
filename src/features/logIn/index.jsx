import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Background from "../../components/background";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";
import FormLogInAnotherAccount from "./components/FormAnother";
import FormLogIn from "./components/FormLogIn";
import FooterLogIn from "./components/FooterLogIn";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

LogIn.propTypes = {};

function LogIn(props) {
  const { checkLogin } = useSelector((state) => state.login);

  return (
    <div>
      {checkLogin ? <Redirect to="/" /> : ""}
      <SC.Container>
        <SC.SubContainer>
          <Background position="row"/>
          <SC.Title>Login</SC.Title>
          <SC.FormLogin>
            <SC.SmallLogo src={logo} />
            <FormLogIn></FormLogIn>
            <FormLogInAnotherAccount></FormLogInAnotherAccount>
            <FooterLogIn></FooterLogIn>
          </SC.FormLogin>
        </SC.SubContainer>
      </SC.Container>
    </div>
  );
}

export default LogIn;
