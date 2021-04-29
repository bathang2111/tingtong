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

  const onSignUp = (_) => {
    if (password !== conFirm) {
      alert("Confirm password is incorrect!!!");
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
      <Background></Background>
      <SC.Container>
        <SC.Logo src={logo} />
        <SC.FormSignUp>
          <SC.SmallLogo src={logo} />
          <SC.Input
            type="text"
            onChange={onEmailChange}
            placeholder="Gmail (Vd: Example@gmail.com)"
            required
          />
          <SC.Input
            type="text"
            onChange={onUserNameChange}
            placeholder="UserName..."
            required
          />
          <SC.Input
            type="password"
            onChange={onPasswordChange}
            placeholder="PassWord..."
            required
          />
          <SC.Input
            type="passWord"
            onChange={onConfirmChange}
            placeholder="Confirm PassWord..."
            required
          />
          <SC.SignUpButton type="button" onClick={onSignUp}>
            SignUp
          </SC.SignUpButton>
          {err ? (
            <SC.SignUpFalse>
              Email or username already exists
            </SC.SignUpFalse>
          ) : (
            ""
          )}
        </SC.FormSignUp>
      </SC.Container>
    </div>
  );
}

export default SignUp;
