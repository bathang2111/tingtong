import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import { getTutors } from "./tutorSlide";
import Tutor from "./compunents/tutor";
import FilterTutors from "./compunents/filterTutors/FilterTutors";
import Header from "../../components/header/header";
import Profile from "../homePage/components/profileModal/profileModal";
import Footer from "../../components/footer";
import Loader from "./compunents/loader";
import Error from "../../components/error";
import { checkTutorOnline } from "./tutorSlide";
import { SocketContext } from "../../api/socketService";

const ListTutors = (props) => {
  const Tutors = useSelector((state) => state.tutors);
  const { language } = useSelector((state) => state);
  const SearchTutors = useSelector(
    (state) => state.tutors.listTutorsWhenSearch
  );
  const dispatch = useDispatch();
  const socket=useContext(SocketContext)

  useEffect(async () => {
    if (Tutors.listTutors.length > 0) return;
    await dispatch(getTutors());
  }, []);

  //listen event tutor online=========================================================================
  useEffect(() => {
    if(!socket)return
    socket.socketTutor.on("active", (data) => {
      console.log(data);
      dispatch(checkTutorOnline("93752215470085131"));
    });
  }, []);

  const ShowListTutors = () => {
    if (SearchTutors.length > 0) {
      const result = SearchTutors.map((tutor) => {
        return <Tutor key={tutor.id} info={tutor} />;
      });
      return result;
    }

    if (Tutors.loading) {
      const result = <Loader />;
      return result;
    } else if (Tutors.error) {
      return <Error />;
    } else {
      const result = Tutors.listTutors.map((tutor) => {
        return <Tutor key={tutor.id} info={tutor} />;
      });
      return result;
    }
  };
  return (
    <>
      {props.match ? <Header /> : ""}
      <FilterTutors />
      <SC.Container>
        <Profile />
        <SC.OnlineTutors>{language.onlineTutors}</SC.OnlineTutors>
        <SC.Pain>
          <SC.GridTutors>{ShowListTutors()}</SC.GridTutors>
        </SC.Pain>

        {props.match ? <Footer /> : ""}
      </SC.Container>
    </>
  );
};

export default ListTutors;
