import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Header from "../../components/header/header";
import SizeBar from "./components/sizeBar";
import MainProfile from "./components/main";
import VideoWatched from "./components/video"
import * as SC from "./style";
const UserProfile = (props) => {
  const isLogin = useSelector((state) => state.login.checkLogin);

  return (
    <>
      {isLogin ? "" : <Redirect to="/" />}
      
      <SC.Container>
        <Header />
        <SC.SubCotainer>
          <SizeBar />
          <MainProfile />
          <VideoWatched/>
        </SC.SubCotainer>
      </SC.Container>
    </>
  );
};

export default UserProfile;
