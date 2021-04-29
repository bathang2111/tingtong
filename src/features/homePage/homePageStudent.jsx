import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import ListTutors from "../listTutors/index";
import Profile from "./components/profileModal/profileModal";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../userProfile/userProfileSlide";

HomePageStudent.propTypes = {};

function HomePageStudent(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <>
      <Profile />
      <Header />
      <Banner />
      <ListTutors />
      <Footer />
    </>
  );
}

export default HomePageStudent;
