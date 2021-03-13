import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import { getTutors } from "./tutorSlide";
import Tutor from "./compunents/tutor";
import FilterTutors from "./compunents/filterTutors/FilterTutors";
import Header from "../../components/header/header";
import Profile from "../homePage/components/profileModal/profileModal";

const ListTutors = (props) => {
  // const [ListTutors, setListTutors] = useState([]);
  const ListTutors = useSelector((state) => state.tutors);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getTutors());
    // const action = getTutors();
    // const result = await dispatch(action);
    // console.log(unwrapResult(result));
    // setListTutors(unwrapResult(result));
  }, []);

  const ShowListTutors = () => {
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
      {props.match ? (
        <>
          <Header />
          <SC.Line />
        </>
      ) : (
        ""
      )}
      <FilterTutors />
      <SC.Container>
        <Profile/>
        <SC.OnlineTutors>available tutors</SC.OnlineTutors>
        <SC.GridTutors>{ShowListTutors()}</SC.GridTutors>
      </SC.Container>
    </>
  );
};

export default ListTutors;
