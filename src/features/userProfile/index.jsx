import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Header from "../../components/header/header";
import * as SC from "./style";

const UserProfile = (props) => {
  const isLogin = useSelector((state) => state.login.checkLogin);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
    {isLogin?"":<Redirect to="/"/>}
      <SC.Container>
        <Header />
        <SC.Pane>
          <SC.Header>
            <SC.Avatar />
            <SC.Name>Ba Thang</SC.Name>
          </SC.Header>
          <SC.Account>Account</SC.Account>
          <SC.Info>
            <button onClick={logout}>logout</button>
          </SC.Info>
        </SC.Pane>
      </SC.Container>
    </>
  );
};

export default UserProfile;
