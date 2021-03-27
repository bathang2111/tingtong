import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import { getTutors } from "./tutorSlide";
import Tutor from "./compunents/tutor";
import FilterTutors from "./compunents/filterTutors/FilterTutors";
import Header from "../../components/header/header";
import Profile from "../homePage/components/profileModal/profileModal";
import Footer from "../../components/footer";
import { io } from "socket.io-client";

const ListTutors = (props) => {
  // const [ListTutors, setListTutors] = useState([]);
  const ListTutors = useSelector((state) => state.tutors.listTutors);
  const {language}=useSelector(state=>state)
  const SearchTutors = useSelector(
    (state) => state.tutors.listTutorsWhenSearch
  );
  const dispatch = useDispatch();
  const socket =io('');

  useEffect(async () => {
    await dispatch(getTutors());
  }, []);

  const ShowListTutors = () => {
    if (SearchTutors.length > 0) {
      const result = SearchTutors.map((tutor) => {
        return <Tutor key={tutor.id} info={tutor} />;
      });
      return result;
    }

    if (ListTutors.length > 0) {
      const result = ListTutors.map((tutor) => {
        return <Tutor key={tutor.id} info={tutor} />;
      });
      return result;
    } else {
      return <h1>no data</h1>;
    }
  };
  return (
    <>
      {props.match ? <Header /> : ""}
      <FilterTutors />
      <SC.Container>
        <Profile />
        <SC.OnlineTutors>{language.onlineTutors}</SC.OnlineTutors>
        <SC.GridTutors>{ShowListTutors()}</SC.GridTutors>
        {props.match ? <Footer /> : ""}
      </SC.Container>
    </>
  );
};

export default ListTutors;
