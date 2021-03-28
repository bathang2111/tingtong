import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Background from "../../components/background";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";
import { getAuthSignUp } from "../../app/authSlide/signUpSlide";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

SignUp.propTypes = {};

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [conFirm, setConfirm] = useState("");
  const dispatch = useDispatch();

  const fetchSignUp = useCallback(async () => {
    const auth = {
      username,
      password,
      firstName,
      lastName: "asdasd",
      email,
      phoneNumber,
    };
    await dispatch(getAuthSignUp(auth))
      .then((res) => {
        const result = unwrapResult(res);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const onSignUp = (_) => {
   if(password!==conFirm){
      alert("Confirm password is incorrect!!!")
      return;
   }

    fetchSignUp();
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmChange = (e) => {
    setConfirm(e.target.value);
  };

  const onNameChange = (e) => {
    setUsername(e.target.value);
    setFirstName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <Background></Background>
      <SC.Container>
        <SC.Logo>
          <img src={logo} />
        </SC.Logo>
        <SC.FormSignUp>
          <SC.Input
            type="text"
            onChange={onEmailChange}
            placeholder="Gmail (Vd: Example@gmail.com)"
          />
          <SC.Input type="text" onChange={onNameChange} placeholder="Name..." />
          <SC.Input
            type="password"
            onChange={onPasswordChange}
            placeholder="PassWord..."
          />
          <SC.Input type="passWord" onChange={onConfirmChange} placeholder="Confirm PassWord..." />
          <SC.Input
            type="number"
            onChange={onPhoneChange}
            placeholder="Phone Number..."
          />
          <SC.SignUpButton type="button" onClick={onSignUp}>
            SignUp
          </SC.SignUpButton>
        </SC.FormSignUp>
      </SC.Container>
    </div>
  );
}

export default SignUp;
