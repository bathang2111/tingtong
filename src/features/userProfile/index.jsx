import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Header from "../../components/header/header";
import SizeBar from "./components/sizeBar";
import MainProfile from "./components/main";
import VideoWatched from "./components/video";
import * as SC from "./style";
import { useEffect } from "react";
import { getUserInfo } from "./userProfileSlide";
const UserProfile = (props) => {
  const isLogin = useSelector((state) => state.login.checkLogin);
  const { userInfo } = useSelector((state) => state.userprofile);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (userInfo && userInfo.fullName) return;
    await dispatch(getUserInfo());
  }, []);

  return (
    <>
      {isLogin ? "" : <Redirect to="/wellcome" />}

      <SC.Container>
        <Header />
        <SC.SubCotainer>
          <SizeBar />
          <MainProfile />
          <VideoWatched />
        </SC.SubCotainer>
      </SC.Container>
    </>
  );
};

export default UserProfile;
