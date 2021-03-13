import React from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import ListTutors from "../listTutors/index";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Profile from "./components/profileModal/profileModal";

HomePageStudent.propTypes = {};

function HomePageStudent(props) {
  const isLogin = useSelector((state) => state.login.checkLogin);
  return (
    <>
      {isLogin ? "" : <Redirect to="/" />}
      <Profile />
      <Header />
      <Banner />
      <ListTutors />
    </>
  );
}

export default HomePageStudent;
