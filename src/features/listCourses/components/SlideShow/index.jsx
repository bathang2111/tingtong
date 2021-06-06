import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

const SlideShow = (props) => {
  const { isOpenSlide } = useSelector((state) => state.courses);
  return (
    <SC.Container
      style={{
        overlay: {
          background: "rgba(0,0,0,0.4)",
          zIndex: "100",
        },
      }}
      isOpen={isOpenSlide}
    ></SC.Container>
  );
};

export default SlideShow;
