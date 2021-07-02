import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./style";
import RequestCallLobby from "./components/requestCallLobby";
import ControlTheCall from "./components/control";
import io from "socket.io-client";
import TutorsApi from "../../api/tutorsApi";
import LocalVideo from "./components/localVideo";
import { SOCKET_URL } from "../../constants/baseURl";

const socket = io(`${SOCKET_URL}/video-call`, {
  // transports: ["websocket", "polling", "flashsocket"],
  query: {
    token: localStorage.getItem("token"),
  },
});

export const CallVideo = (props) => {
  const dispatch = useDispatch();
  const [api, setApi] = useState();
  const { camStatus } = useSelector((state) => state.jitsi);
  const { micStatus } = useSelector((state) => state.jitsi);
  const { shareScreen } = useSelector((state) => state.jitsi);
  const [request_cancle, setRequest_cancle] = useState(false);
  const localAvatar = localStorage.getItem("avatar");
  const [matMang, setMatMang] = useState(false);
  let timeOut;
  // const check =
  //   props.match.params.receiverId == localStorage.getItem("idUser")
  //     ? true
  //     : false;

  //     console.log(check);

  const startConference = () => {
    try {
      const domain = "stream.tingtong.xyz";
      const options = {
        roomName: props.match.params.roomId,
        // displayName: "thang",
        parentNode: document.getElementById("jitsi-container"),
        interfaceConfigOverwrite: {
          DEFAULT_BACKGROUND: "#000", //good
          // FILM_STRIP_MAX_HEIGHT: 288, //good
          HIDE_INVITE_MORE_HEADER: true, //good
          // LOCAL_THUMBNAIL_RATIO: 16 / 9, //good
          // DEFAULT_LOCAL_DISPLAY_NAME: "thang dep trai",
          filmStripOnly: false,
        },
        configOverwrite: {
          startWithAudioMuted: false, //good
          prejoinPageEnabled: false, //good
          toolbarButtons: [],
        },
      };
      const confferent = new window.JitsiMeetExternalAPI(domain, options);
      setApi(confferent);
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  };

  useEffect(async () => {
    if (window.JitsiMeetExternalAPI) {
      await startConference();
    } else alert("Jitsi Meet API script not loaded");
  }, []);

  useEffect(() => {
    if (!api) return;
    const supAPI = api;
    supAPI.executeCommand("toggleFilmStrip");
    supAPI.executeCommand("toggleLobby", true);
    if (!camStatus) supAPI.executeCommand("toggleVideo");
    if (!micStatus) supAPI.executeCommand("toggleAudio");
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const supAPI = api;
    supAPI.executeCommand("avatarUrl", localAvatar);
  }, [api]);

  //TOGGLE VIDEO
  useEffect(() => {
    if (!api) return;
    const supAPI = api;
    supAPI.executeCommand("toggleVideo");
  }, [camStatus]);

  // TOGGLE AUDIO
  useEffect(() => {
    if (!api) return;
    const supAPI = api;
    supAPI.executeCommand("toggleAudio");
  }, [micStatus]);

  //TOGGLE SHARESCREEN
  useEffect(() => {
    if (!api) return;
    if (shareScreen == 0) return;
    const supAPI = api;
    supAPI.executeCommand("toggleShareScreen");
  }, [shareScreen]);

  //1 thằng mất mạng
  useEffect(() => {
    if (!api) return;

    api.addListener("participantLeft", () => {
      alert("mat mang r");
      timeOut = setTimeout(() => {
        setMatMang(true);
      }, 10000);
    });
  }, [api]);

  // thằng đó join lại
  useEffect(() => {
    if (!api) return;
    const supAPI = api;
    supAPI.addListener("participantJoined", () => {
      clearTimeout(timeOut);
    });
  }, [api]);

  const CancleTheCall = (value) => {
    setRequest_cancle(value);
  };

  useEffect(() => {
    socket.on("sendToReceiver", (data) => {
      window.close();
    });
  }, []);

  return (
    <>
      <SC.Container>
        {request_cancle ? (
          ""
        ) : (
          <>
            <LocalVideo />
            <ControlTheCall
              mangStatus={matMang}
              socket={socket}
              roomId={props.match.params.roomId}
              callerId={props.match.params.callerId}
              receiverId={props.match.params.receiverId}
            />
            <SC.JitSiContainer id="jitsi-container" />
          </>
        )}

        <RequestCallLobby
          socket={socket}
          roomId={props.match.params.roomId}
          receiverId={props.match.params.receiverId}
          callerId={props.match.params.callerId}
          CancleTheCall={(value) => CancleTheCall(value)}
        />
      </SC.Container>
    </>
  );
};

export default CallVideo;
