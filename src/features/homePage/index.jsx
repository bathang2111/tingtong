import React from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import { useSelector } from "react-redux";  
import { Redirect } from "react-router";

HomePage.propTypes = {};

function HomePage(props) {
  const isLogin = useSelector((state) => state.login.checkLogin);
  return (
    <>
      {isLogin ? <Redirect to="/student" /> : ""}
      <Header />
      <Banner />
      <h1>Designing</h1>
    </>
  );
}

export default HomePage;
