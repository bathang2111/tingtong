import { useDispatch, useSelector } from "react-redux";
import {
  ChangeLanguageEnglish,
  ChangeLanguageVietNam,
} from "../../../../lang/translateSlide";
import * as SC from "./style";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import { ChangeAvatar, SaveAvatar } from "../../userProfileSlide";

const MainProfile = (props) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);
  const { changeAvatar } = useSelector((state) => state.userprofile);
  const [imageAfterChange, setImage] = useState(null);
  const { image } = useSelector((state) => state.userprofile);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const onHandleChange = (e) => {
    if (e.target.value == "VietNam") {
      dispatch(ChangeLanguageVietNam());
    } else {
      dispatch(ChangeLanguageEnglish());
    }
    localStorage.setItem("lang", e.target.value);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onCrop = (preview) => {
    setImage(preview);
  };

  const saveImage = () => {
   if( window.confirm(`${language.alertChange}`)){
    dispatch(SaveAvatar(imageAfterChange));
    dispatch(ChangeAvatar());
   }else{
     return
   }
    
  };

  const cancleChange = () => {
    dispatch(ChangeAvatar());
  };

  return (
    <SC.Container>
      {changeAvatar ? (
        <SC.SetTing>
          <SC.Title>{language.changeAvatar}</SC.Title>
          <div style={{ width: "30px", height: "30px" }} />
          <Avatar
            width={300}
            height={300}
            onCrop={onCrop}
            mimeTypes="svg"
            src={image}
            // onClose={this.onClose}
            // onBeforeFileLoad={onBeforeFileLoad}
          />
          <SC.Pain>
            <SC.BtnChange onClick={saveImage}>
              {language.saveAvatar}
            </SC.BtnChange>
            <SC.BtnChange onClick={cancleChange}>
              {language.cancelChangeAvatar}
            </SC.BtnChange>
          </SC.Pain>
        </SC.SetTing>
      ) : (
        <SC.SetTing>
          <SC.Title>{language.setTing}</SC.Title>
          <SC.Pain>
            {language.languaGe}:
            <SC.Language
              value={localStorage.getItem("lang")}
              onChange={onHandleChange}
            >
              <SC.Desciption>VietNam</SC.Desciption>
              <SC.Desciption>English</SC.Desciption>
            </SC.Language>
          </SC.Pain>
          <SC.LogOut onClick={logout}>{language.logOut}</SC.LogOut>
        </SC.SetTing>
      )}
    </SC.Container>
  );
};

export default MainProfile;
