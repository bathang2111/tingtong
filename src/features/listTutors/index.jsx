import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import { getTutors, RemoveNoResult } from "./tutorSlide";
import Tutor from "./compunents/tutor";
import FilterTutors from "./compunents/filterTutors/FilterTutors";
import Header from "../../components/header/header";
import Profile from "../homePage/components/profileModal/profileModal";
import Footer from "../../components/footer";
import Loader from "./compunents/loader";
import Error from "../../components/error";
import { checkTutorOnline } from "./tutorSlide";
import { SocketContext } from "../../api/socketService";
import AuthApi from "../../api/authApi";
import Typography from "@material-ui/core/Typography";
import { Card, Button } from "@material-ui/core";

const ListTutors = (props) => {
  const Tutors = useSelector((state) => state.tutors);
  const [favoriteTutors, setFavoriteTutor] = useState();
  const { language } = useSelector((state) => state);
  const SearchTutors = useSelector(
    (state) => state.tutors.listTutorsWhenSearch
  );
  const { noResult } = useSelector((state) => state.tutors);
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  useEffect(async () => {
    try {
      const res = await AuthApi.getUserInfo();
      setFavoriteTutor(res.favoriteTutors);
      // setFavoriteTutor(res.)
    } catch (error) {}
  }, []);

  useEffect(async () => {
    if (Tutors.listTutors.length > 0) return;
    await dispatch(getTutors());
  }, []);

  //listen event tutor online=========================================================================
  useEffect(() => {
    if (!socket) return;
    socket.socketTutor.on("active", (data) => {
      console.log(data);
      dispatch(checkTutorOnline(data.tutor_id));
    });
  }, [socket]);

  const ShowListTutors = () => {
    if (noResult) {
      return (
        <Card
          style={{
            width: "100%",
            height: 150,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h3" component="h5">
            Kh??ng t??m th???y k???t qu???!
          </Typography>
          <Button
            onClick={() => dispatch(RemoveNoResult())}
            variant="contained"
            color="primary"
          >
            ?????ng ??
          </Button>
        </Card>
      );
    }
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
        return (
          <Tutor key={tutor.id} info={tutor} favoriteTutors={favoriteTutors} />
        );
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
        <Typography
          style={{ marginLeft: 80, fontSize: "1.5rem", marginTop: "24px" }}
          gutterBottom
          variant="h5"
          component="h5"
        >
          Gia s?? c???a ch??ng t??i
        </Typography>
        {/* <SC.OnlineTutors>{language.onlineTutors}</SC.OnlineTutors> */}
        <SC.Pain>
          <SC.GridTutors>{ShowListTutors()}</SC.GridTutors>
        </SC.Pain>

        {props.match ? <Footer /> : ""}
      </SC.Container>
    </>
  );
};

export default ListTutors;
