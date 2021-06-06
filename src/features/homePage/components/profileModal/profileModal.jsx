import { unwrapResult } from "@reduxjs/toolkit";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageApi from "../../../../api/messageApi";
import { SocketContext } from "../../../../api/socketService";
import TutorsApi from "../../../../api/tutorsApi";
// import { socketChat } from "../../../../app/App";
import {
  GetContentByRoomId,
  OpenChatWindow,
  PushChatTing,
  setRoomId,
} from "../../../messenger/messageSlide";
import { ToggleProfileModal } from "../../homePageSlice";
import * as SC from "./style";

const Profile = (props) => {
  const isOpen = useSelector((state) => state.homepage.toggleModal);
  const idTutorDetail = useSelector((state) => state.homepage.idTutor);
  const [Tutor, setTutor] = useState({});
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  useEffect(async () => {
    const response = await TutorsApi.getTutorDetail(idTutorDetail);
    setTutor(response);
  }, [idTutorDetail]);

  const onHandleClick = async () => {
    dispatch(ToggleProfileModal());
    dispatch(OpenChatWindow());
    const body = {
      roomName: "Tutor.name",
      roomType: 1,
      memberRoom: [
        {
          userID: localStorage.getItem("idUser"),
        },
        {
          userID: Tutor.userID,
        },
      ],
    };

    const room = await MessageApi.CreateRoom(body);

    /////////////////////////////

    const userChatTing = {
      id: room.data.id,
      receiver: Tutor.userID,
      name: Tutor.name,
      avatar: Tutor.avatar,
    };
    dispatch(setRoomId(userChatTing));
    //Save to list chatTing
    let content = await dispatch(GetContentByRoomId(room.data.id)); // get all mesages in conversation
    let res = unwrapResult(content);
    ///////////////////////////////////////
    socket.socketChat.emit("joinRoom", {
      event: "joinRoom",
      room: room.data.id,
    }); // emit event join rôm
    dispatch(
      PushChatTing({
        roomId: room.data.id,
        chatContent: res,
        avatar: Tutor.avatar,
        name: Tutor.username,
        receiver: Tutor.userID,
        notification: 0,
      })
    );
  };

  return (
    <SC.Contaner
      isOpen={isOpen}
      onRequestClose={() => dispatch(ToggleProfileModal())}
      style={{
        overlay: {
          zIndex: "10",
          background: "rgba(0,0,0,0.3)",
        },
      }}
    >
      <SC.IconGroup>
        <SC.CloseModalButton onClick={() => dispatch(ToggleProfileModal())} />
        <SC.LoveStatus />
        <SC.Message onClick={onHandleClick} />
        <SC.Menu />
      </SC.IconGroup>
      <SC.GroupInfo>
        <SC.Avatar src={Tutor.avatar} />
        <SC.Pane>
          <SC.Name>{Tutor.name}</SC.Name>
          <SC.Engine />
          <SC.Nation></SC.Nation>
        </SC.Pane>
      </SC.GroupInfo>

      <SC.CallVideoButton>Gọi</SC.CallVideoButton>
      <SC.Line />
      <SC.VideoIntro src={Tutor.introVideo} controls />

      <SC.IntroGroup>
        <SC.Title>About Me</SC.Title>
        <SC.SubTitle>Language: {Tutor.language} </SC.SubTitle>
        <SC.SubTitle>Specialties: </SC.SubTitle>
        <SC.SubTitle>Interest: {Tutor.interest}</SC.SubTitle>
        <SC.SubTitle>
          Professional-Background: {Tutor.professionalBackground}
        </SC.SubTitle>
        <SC.SubTitle>Experience: {Tutor.experience}</SC.SubTitle>
      </SC.IntroGroup>
    </SC.Contaner>
  );
};

export default Profile;
