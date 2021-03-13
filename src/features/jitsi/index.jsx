import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Loader from "./components/loader/Loader";
import Jitsi from "react-jitsi";

CallVideo.propTypes = {};

function CallVideo(props) {
  const [displayName, setDisplayName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [onCall, setOnCall] = useState(false);
  const videoRef = useRef();


  return (
    <div>
      <h1>Call Video</h1>
      <Jitsi/>
    </div>
  );
}

export default CallVideo;
