// import { useDispatch, useSelector } from "react-redux";
// import {
//   ChangeLanguageEnglish,
//   ChangeLanguageVietNam,
// } from "../../../../lang/translateSlide";
// import * as SC from "./style";
// import Avatar from "react-avatar-edit";
// import { useState } from "react";
// import { ChangeAvatar, SaveAvatar } from "../../../setting/userProfileSlide";
// import axios from "axios";
// import { FILE_URL } from "../../../../constants/baseURl";
// import UpdateUser from "../../../setting/components/updateUser";
// import { useEffect } from "react";
// import AuthApi from "../../../../api/authApi";

// const MainProfile = (props) => {
//   const dispatch = useDispatch();
//   const { language } = useSelector((state) => state);
//   const { changeAvatar } = useSelector((state) => state.userprofile);
//   const [imageAfterChange, setImage] = useState(null);
//   const { image } = useSelector((state) => state.userprofile);
//   const { userInfo } = useSelector((state) => state.userprofile);
//   const [ToggleUpdate, setUpdate] = useState(false);
//   const [urlOfFile, setUrl] = useState();

//   useEffect(async () => {
//     if (!urlOfFile) return;
//     const data = { avatar: urlOfFile };
//     try {
//       const res = await AuthApi.UpdateUserInfo(data);
//       console.log(res);
//     } catch (error) {}
//   }, [urlOfFile]);

//   const logout = () => {
//     localStorage.clear();
//     window.location.reload();
//   };

//   const onHandleChange = (e) => {
//     if (e.target.value == "VietNam") {
//       dispatch(ChangeLanguageVietNam());
//     } else {
//       dispatch(ChangeLanguageEnglish());
//     }
//     localStorage.setItem("lang", e.target.value);
//   };

//   const onBeforeFileLoad = (elem) => {
//     if (elem.target.files[0].size > 71680) {
//       alert("File is too big!");
//       elem.target.value = "";
//     }
//   };

//   const onCrop = (preview) => {
//     setImage(preview);
//   };

//   function urltoFile(url, filename, mimeType) {
//     return fetch(url)
//       .then((res) => {
//         return res.blob();
//       })
//       .then((blob) => {
//         return new File([blob], filename, { type: mimeType });
//       });
//   }

//   const saveImage = async () => {
//     if (window.confirm(`${language.alertChange}`)) {
//       dispatch(SaveAvatar(imageAfterChange));
//       dispatch(ChangeAvatar());

//       const file = await urltoFile(imageAfterChange, "avatar.jpg", "image/jpg");
//       var data = new FormData();
//       data.append("files", file);

//       // now upload
//       const config = {
//         headers: {
//           authorization: localStorage.getItem("token"),
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       };
//       axios.post(FILE_URL, data, config).then((response) => {
//         // console.log(response);
//         setUrl(response[0].url);
//       });
//     } else {
//       return;
//     }
//   };

//   const cancleChange = () => {
//     dispatch(ChangeAvatar());
//   };

//   const closePopup = (value) => {
//     setUpdate(value);
//   };

//   return (
//     <SC.Container>
//       <UpdateUser
//         closePopup={(value) => {
//           closePopup(value);
//         }}
//         toggle={ToggleUpdate}
//       />
//       {changeAvatar ? (
//         <SC.SetTing>
//           <SC.Title>{language.changeAvatar}</SC.Title>
//           <div style={{ width: "30px", height: "30px" }} />
//           <Avatar
//             width={300}
//             height={300}
//             onCrop={onCrop}
//             mimeTypes="svg"
//             label="Ch???n h??nh ???nh"
//             exportAsSquare={true}
//             // cropRadius={10}
//             // cropColor="black"
//             src={userInfo.avatar ? userInfo.avatar : image}
//             // onClose={this.onClose}
//             // onBeforeFileLoad={onBeforeFileLoad}
//           />
//           <SC.Pain>
//             <SC.BtnChange onClick={saveImage}>
//               {language.saveAvatar}
//             </SC.BtnChange>
//             <SC.BtnChange onClick={cancleChange}>
//               {language.cancelChangeAvatar}
//             </SC.BtnChange>
//           </SC.Pain>
//         </SC.SetTing>
//       ) : (
//         <SC.SetTing>
//           <SC.Title>{language.setTing}</SC.Title>
//           <SC.GroupI>
//             <SC.Variable>T??n t??i kh???a</SC.Variable>
//             <SC.Value>{userInfo.fullName}</SC.Value>
//           </SC.GroupI>
//           <SC.GroupI>
//             <SC.Variable>?????a ch???</SC.Variable>
//             {userInfo && userInfo.address ? (
//               <SC.Value>{userInfo.address}</SC.Value>
//             ) : (
//               <SC.NoData>Ch??a c???p nh???t</SC.NoData>
//             )}
//           </SC.GroupI>
//           <SC.GroupI>
//             <SC.Variable>S??? ??i???n tho???i</SC.Variable>
//             {userInfo && userInfo.phoneNumber ? (
//               <SC.Value>{userInfo.phoneNumber}</SC.Value>
//             ) : (
//               <SC.NoData>Ch??a c???p nh???t</SC.NoData>
//             )}
//           </SC.GroupI>
//           <SC.Pain>
//             <Ripples>
//               <SC.UpdateBTN
//                 onClick={() => {
//                   setUpdate(true);
//                 }}
//               >
//                 C???p nh???t t??i kho???n
//               </SC.UpdateBTN>
//             </Ripples>
//           </SC.Pain>
//           <SC.Pain>
//             {language.languaGe}:
//             <SC.Language
//               value={localStorage.getItem("lang")}
//               onChange={onHandleChange}
//             >
//               <SC.Desciption>English</SC.Desciption>
//               <SC.Desciption>VietNam</SC.Desciption>
//             </SC.Language>
//           </SC.Pain>
//           <SC.LogOut onClick={logout}>{language.logOut}</SC.LogOut>
//         </SC.SetTing>
//       )}
//     </SC.Container>
//   );
// };

// export default MainProfile;
