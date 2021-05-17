import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthLogin, isLoginOn } from "../../../../app/authSlide/loginSlide";
import { unwrapResult } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";

FormLogIn.propTypes = {};

function FormLogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();

  const fetchLogin = useCallback(async () => {
    const auth = { username: username, password: password };
    await dispatch(getAuthLogin(auth))
      .then((res) => {
        const result = unwrapResult(res);
        if (result.user.id) {
          localStorage.setItem("idUser", result.user.id);
          localStorage.setItem("token", result.accessToken);
          // connectSocket();
          setIsLogin(true);
          dispatch(isLoginOn());
        } else {
          console.log("ahihi");
          setIsLoginFailed(true);
        }
      })
      .catch((e) => {
        setIsLoginFailed(true);
      });
  });

  const onLogin = (_) => {
    // console.log("username: ", username);
    // console.log("password: ", password);

    fetchLogin();
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <SC.Container onSubmit={handleSubmit(onLogin)}>
      <SC.InputBlock>
        {isLogin ? <Redirect to="/" /> : null}
        {isLoginFailed ? <SC.TxtFailed>Login failed</SC.TxtFailed> : ""}
        <SC.Input
          type="text"
          placeholder="Username ..."
          onChange={onUsernameChange}
          required
        />
        <SC.Input
          type="password"
          placeholder="Password ..."
          onChange={onPasswordChange}
          required
        />
      </SC.InputBlock>
      <SC.Button type="submit">Log In</SC.Button>
    </SC.Container>
  );
}

export default FormLogIn;
