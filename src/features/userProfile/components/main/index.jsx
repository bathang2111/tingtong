import { useDispatch, useSelector } from "react-redux";
import {
  ChangeLanguageEnglish,
  ChangeLanguageVietNam,
} from "../../../../lang/translateSlide";
import * as SC from "./style";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import { ChangeAvatar, SaveAvatar } from "../../userProfileSlide";
import axios from "axios";
import { FILE_URL } from "../../../../constants/baseURl";
import UpdateUser from "../updateUser";
import Ripples from "react-ripples";

const MainProfile = (props) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);
  const { changeAvatar } = useSelector((state) => state.userprofile);
  const [imageAfterChange, setImage] = useState(null);
  const { image } = useSelector((state) => state.userprofile);
  const { userInfo } = useSelector((state) => state.userprofile);
  const [ToggleUpdate, setUpdate] = useState(false);

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

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

  const saveImage = async () => {
    if (window.confirm(`${language.alertChange}`)) {
      dispatch(SaveAvatar(imageAfterChange));
      dispatch(ChangeAvatar());

      const file = dataURLtoFile(imageAfterChange,'avatar.txt');
      var data = new FormData();
      data.append("files", file);

      // now upload
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      axios.post(FILE_URL, data, config).then((response) => {
        console.log(response.data);
      });
    } else {
      return;
    }
  };

  const cancleChange = () => {
    dispatch(ChangeAvatar());
  };

  const closePopup = (value) => {
    setUpdate(value);
  };

  return (
    <SC.Container>
      <UpdateUser
        closePopup={(value) => {
          closePopup(value);
        }}
        toggle={ToggleUpdate}
      />
      {changeAvatar ? (
        <SC.SetTing>
          <SC.Title>{language.changeAvatar}</SC.Title>
          <div style={{ width: "30px", height: "30px" }} />
          <Avatar
            width={300}
            height={300}
            onCrop={onCrop}
            mimeTypes="svg"
            label="Chọn hình ảnh"
            exportAsSquare={true}
            // cropRadius={10}
            // cropColor="black"
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
          <SC.GroupI>
            <SC.Variable>Tên tài khỏa</SC.Variable>
            <SC.Value>{userInfo.fullName}</SC.Value>
          </SC.GroupI>
          <SC.GroupI>
            <SC.Variable>Địa chỉ</SC.Variable>
            {userInfo && userInfo.address ? (
              <SC.Value>{userInfo.address}</SC.Value>
            ) : (
              <SC.NoData>Chưa cập nhật</SC.NoData>
            )}
          </SC.GroupI>
          <SC.GroupI>
            <SC.Variable>Số điện thoại</SC.Variable>
            {userInfo && userInfo.phoneNumber ? (
              <SC.Value>{userInfo.phoneNumber}</SC.Value>
            ) : (
              <SC.NoData>Chưa cập nhật</SC.NoData>
            )}
          </SC.GroupI>
          <SC.Pain>
            <Ripples>
              <SC.UpdateBTN
                onClick={() => {
                  setUpdate(true);
                }}
              >
                Cập nhật tài khoản
              </SC.UpdateBTN>
            </Ripples>
          </SC.Pain>
          <SC.Pain>
            {language.languaGe}:
            <SC.Language
              value={localStorage.getItem("lang")}
              onChange={onHandleChange}
            >
              <SC.Desciption>English</SC.Desciption>
              <SC.Desciption>VietNam</SC.Desciption>
            </SC.Language>
          </SC.Pain>
          <SC.LogOut onClick={logout}>{language.logOut}</SC.LogOut>
        </SC.SetTing>
      )}
    </SC.Container>
  );
};

export default MainProfile;
