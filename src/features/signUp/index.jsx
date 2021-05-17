import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Background from "../../components/background";
import * as SC from "./style";
import logo from "../../assets/images/logo.svg";
import { getAuthSignUp } from "../../app/authSlide/signUpSlide";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Redirect } from "react-router";

SignUp.propTypes = {};

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [conFirm, setConfirm] = useState("");
  const [succest, setSuccest] = useState(false);
  const [FailInfo, setFail] = useState(0);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

  const fetchSignUp = useCallback(async () => {
    const auth = {
      username,
      password,
      email,
    };
    await dispatch(getAuthSignUp(auth))
      .then((res) => {
        const result = unwrapResult(res);
        alert("Đăng kí thành công:))");
        setSuccest(true);
      })
      .catch((err) => {
        setErr(true);
        console.log(err);
      });
  });

  const onSignUp = (e) => {
    e.preventDefault();
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      setFail(1);
      return;
    }
    if (username.length < 6) {
      setFail(2);
      return;
    }
    if (password.length < 6) {
      setFail(3);
      return;
    }
    if (password !== conFirm) {
      setFail(4);
      return;
    }

    fetchSignUp();
  };

  const onUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmChange = (e) => {
    setConfirm(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      {succest ? <Redirect to="/login" /> : ""}
      <SC.Container>
        <SC.SubContainer>
          <Background textAlign="end" position="row-reverse" />
          <SC.Title>SignUp</SC.Title>
          <SC.FormSignUp id="novalidateform" novalidate onSubmit={onSignUp}>
            <SC.SmallLogo src={logo} />
            <SC.Input
              form="novalidateform"
              type="text"
              onChange={onEmailChange}
              placeholder="Gmail (Vd: Example@gmail.com)"
              required
            />
            {FailInfo == 1 ? <SC.Infofail>Invalid email</SC.Infofail> : ""}
            <SC.Input
              form="novalidateform"
              type="text"
              onChange={onUserNameChange}
              placeholder="UserName..."
              required
            />
            {FailInfo == 2 ? (
              <SC.Infofail>UserName is 6-32 chareacters long</SC.Infofail>
            ) : (
              ""
            )}
            <SC.Input
              form="novalidateform"
              type="password"
              onChange={onPasswordChange}
              placeholder="PassWord..."
              required
            />
            {FailInfo == 3 ? (
              <SC.Infofail>Password is 6-32 chareacters long</SC.Infofail>
            ) : (
              ""
            )}
            <SC.Input
              form="novalidateform"
              type="passWord"
              onChange={onConfirmChange}
              placeholder="Confirm PassWord..."
              required
            />
            {FailInfo == 4 ? <SC.Infofail>Password was wrong</SC.Infofail> : ""}
            <SC.SignUpButton type="submit">SignUp</SC.SignUpButton>
            {err ? (
              <SC.SignUpFalse>Email or username already exists</SC.SignUpFalse>
            ) : (
              ""
            )}
            <SC.Login to="/login">Login</SC.Login>
          </SC.FormSignUp>
        </SC.SubContainer>
      </SC.Container>
    </div>
  );
}

export default SignUp;
