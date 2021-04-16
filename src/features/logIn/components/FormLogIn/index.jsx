import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthLogin, isLoginOn } from "../../../../app/authSlide/loginSlide";
import { unwrapResult } from "@reduxjs/toolkit";

FormLogIn.propTypes = {};

function FormLogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const fetchLogin = useCallback(async () => {
    const auth = { username: username, password: password };
    await dispatch(getAuthLogin(auth))
      .then((res) => {
        const result = unwrapResult(res);
        console.log(result);
        if (result.user.id) {
          localStorage.setItem("idUser", result.user.id);
          localStorage.setItem("token", result.accessToken);
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
    <>
      <SC.InputBlock>
        {isLogin ? <Redirect to="/" /> : null}
        {isLoginFailed ? <SC.TxtFailed>Login failed</SC.TxtFailed> : ""}
        <SC.Input
          type="text"
          placeholder="Username ..."
          onChange={onUsernameChange}
        />
        <SC.Input
          type="password"
          placeholder="Password ..."
          onChange={onPasswordChange}
        />
      </SC.InputBlock>
      <SC.Button type="button" value="Log In" onClick={onLogin}></SC.Button>
    </>
  );
}

export default FormLogIn;
