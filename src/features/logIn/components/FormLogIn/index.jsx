import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import * as SC from "./style";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoginOn } from "../../../../app/authSlide/loginSlide";
import AuthApi from "../../../../api/authApi";

FormLogIn.propTypes = {};

const domain = "http://115.78.232.219";
const port = 5000;

function FormLogIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const fetchLogin = useCallback(async() => {
    axios({
      method: "POST",
      url: `${domain}:${port}/api/auth/login`,
      headers: {
        "content-type": "application/json",
      },
      data: {
        username: username,
        password: password,
      },
    })
    // const auth = { username: username, password: password };
    // await dispatch(AuthApi.Login(auth))
      .then((res) => {
        console.log("response: ", res);
        if (res.data.user.id) {
          localStorage.setItem("idUser", res.data.user.id);
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
    console.log("username: ", username);
    console.log("password: ", password);

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
        {isLogin ? <Redirect to="/student" /> : null}
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
