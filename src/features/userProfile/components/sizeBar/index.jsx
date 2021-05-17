import IconTwitter from "../../../../components/footer/image/twitter_logo25.png";
import IconInstagram from "../../../../components/footer/image/instagram_logo24.png";
import IconFacebook from "../../../../components/footer/image/facebook_logo25.png";
import ArrowIcon from "../../../../assets/images/arrow.png";
import "./demo.scss";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeAvatar } from "../../userProfileSlide";

const SizeBar = (props) => {
  const ToggleRef = useRef(null);
  const ToggleRef1 = useRef(null);
  const dispatch = useDispatch();
  const { image } = useSelector((state) => state.userprofile);
  const { userInfo } = useSelector((state) => state.userprofile);

  const ToggleLeft = () => {
    ToggleRef.current.classList.toggle("minimize");
    ToggleRef1.current.classList.toggle("small");
  };

  const changeAvatar = () => {
    dispatch(ChangeAvatar());
  };

  return (
    <div className="left-sidebar" ref={ToggleRef}>
      <div className="inner">
        <div className="user-profile">
          <div className="user-background"></div>
          <div className="user-image" onClick={changeAvatar}>
            <img src={image} />
          </div>
          <div className="user-info">
            <p className="user-name">{userInfo ? userInfo.fullName : ""}</p>
            <p className="user-title">{userInfo ? userInfo.address : ""}</p>
            <p className="user-title">{userInfo ? userInfo.phoneNumber : ""}</p>
          </div>
        </div>
        <div className="main-menu"></div>
        <div className="social-links">
          <img className="social-icon" src={IconTwitter} />
          <img className="social-icon" src={IconFacebook} />
          <img className="social-icon" src={IconInstagram} />
        </div>
      </div>
      <div className="toggle-button" ref={ToggleRef1} onClick={ToggleLeft}>
        <img className="asd" src={ArrowIcon}></img>
      </div>
    </div>
  );
};

export default SizeBar;
