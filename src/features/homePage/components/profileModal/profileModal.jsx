import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TutorsApi from "../../../../api/tutorsApi";
import { ToggleProfileModal } from "../../homePageSlice";
import * as SC from "./style";

const Profile = (props) => {
  const isOpen = useSelector((state) => state.homepage.toggleModal);
  const idTutorDetail=useSelector(state=>state.homepage.idTutor);
  const [Tutor,setTutor]=useState({});
  const dispatch = useDispatch();

  useEffect(async()=>{
    const response=await TutorsApi.getTutorDetail(idTutorDetail);
    setTutor(response);
  },[idTutorDetail]);

  return (
    <SC.Contaner
      isOpen={isOpen}
      onRequestClose={() => dispatch(ToggleProfileModal())}
      style={{
        overlay: {
          background: "rgba(0,0,0,0.3)",
        },
      }}
    >
      <SC.IconGroup>
        <SC.CloseModalButton onClick={() => dispatch(ToggleProfileModal())} />
        <SC.LoveStatus/>
        <SC.Message/>
        <SC.Menu/>
      </SC.IconGroup>
      <SC.GroupInfo>
        <SC.Avatar/>
        <SC.Pane>
          <SC.Name></SC.Name>
          <SC.Engine/>
          <SC.Nation></SC.Nation>
        </SC.Pane>
      </SC.GroupInfo>

      <SC.CallVideoButton>Gọi</SC.CallVideoButton>
      <SC.Line/>
      <SC.VideoIntro src={Tutor.introVideo} />

      <SC.IntroGroup>
        <SC.Title>About Me</SC.Title>
        <SC.SubTitle>Language: {Tutor.language} </SC.SubTitle>
        <SC.SubTitle>Specialties: </SC.SubTitle>
        <SC.SubTitle>Interest: {Tutor.interest}</SC.SubTitle>
       <SC.SubTitle>Professional-Background: {Tutor.professionalBackground}</SC.SubTitle>
       <SC.SubTitle>Experience: {Tutor.experience}</SC.SubTitle>
      </SC.IntroGroup>
    </SC.Contaner>
  );
};

export default Profile;
