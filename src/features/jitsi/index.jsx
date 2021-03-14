import React, { useState } from "react";
import LocalStream from "./components/localStream/localStream";
import * as SC from "./style";

export const CallVideo = () => {
  return (
    <SC.Container>
      <LocalStream />
    </SC.Container>
  );
};

export default CallVideo;
