import React from "react";
import PropTypes from "prop-types";
import Background from "../../components/background";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";

SignUp.propTypes = {};

function SignUp(props) {
  return (
    <div>
      <Background></Background>
      <SC.Container>
        <SC.Logo>
          <img src={logo} />
        </SC.Logo>
        <SC.FormLogin>
          <SC.Input type="text" placeholder="Gmail (Vd: Example@gmail.com)" />
          <SC.Input type="text" placeholder="Name..." />
          <SC.Input type="password" placeholder="PassWord..." />
          <SC.Input type="passWord" placeholder="Confirm PassWord..." />
          <SC.Input type="number" placeholder="Phone Number..." />
          <SC.SignUpButton type="submit">SignUp</SC.SignUpButton>
        </SC.FormLogin>
      </SC.Container>
    </div>
  );
}

export default SignUp;
