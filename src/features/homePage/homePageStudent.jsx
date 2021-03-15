import React from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import ListTutors from "../listTutors/index";
import Profile from "./components/profileModal/profileModal";
import Footer from "../../components/footer";

HomePageStudent.propTypes = {};

function HomePageStudent(props) {
  return (
    <>
      <Profile />
      <Header />
      <Banner />
      <ListTutors />
      <Footer/>
    </>
  );
}

export default HomePageStudent;
