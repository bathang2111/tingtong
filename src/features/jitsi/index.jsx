import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import { Redirect } from "react-router";
import { OpenFeedBackLobby } from "../feedBack/feedBackSlide";
import { CallerStatusFalse } from "./jitsiSlide";

export const CallVideo = () => {
  const [leave, setLeave] = useState(false);
  const { CallerStatus } = useSelector((state) => state.jitsi);
  const dispatch=useDispatch()


  const startConference = () => {
    try {
      const domain = "stream. tingtong. xyz";
      const options = { 
        roomName: "videocall",
        displayName: "",
        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          DEFAULT_BACKGROUND: "#474747", //good
          // FILM_STRIP_MAX_HEIGHT: 288, //good
          HIDE_INVITE_MORE_HEADER: true, //good
          // LOCAL_THUMBNAIL_RATIO: 16 / 9, //good
          // DEFAULT_LOCAL_DISPLAY_NAME: "thang dep trai",
          filmStripOnly: false,
        },
        configOverwrite: {
          startWithAudioMuted: false, //good
          prejoinPageEnabled: false, //good
          toolbarButtons: ["chat"],
        },
      };
      const api = new window.JitsiMeetExternalAPI(domain, options);


      api.addEventListener("videoConferenceLeft", () => {
        if(CallerStatus){
          dispatch(OpenFeedBackLobby())
          dispatch(CallerStatusFalse())
          console.log("trongggggggggggggg");
        }
        console.log("mgoaiiiiiiiiiiiiii");
        setLeave(true);
      });
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  };

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  },[]);

  return (
    <>
      {leave ? <Redirect to="/" /> : ""}
      <SC.Container>
        <SC.Loader>Connecting...</SC.Loader>
        <SC.JitSiContainer id="jitsi-container" />
      </SC.Container>
    </>
  );
};

export default CallVideo;

// 98353366958085146
