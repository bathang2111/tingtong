import React, { useEffect, useState } from "react";
import PaymentItem from "../packageItem";
import CapBasic from "../../../../assets/images/imageBasicCap.png";
import CapSliver from "../../../../assets/images/imageSliverCap.png";
import CapGold from "../../../../assets/images/imageCapGold.png";

import * as SC from "./style.js";
import { useDispatch } from "react-redux";

const TimePackage = (props) => {
  const value = [
    {
      name:"basic",
      image: CapBasic,
      time: 1,
      price: 25000,
    },
    {
      name:"sliver",
      image: CapSliver,
      time: 10,
      price: 200000,
    },
    {
      name:"gold",
      image: CapGold,
      time: 50,
      price: 700000,
    },
  ];

  const showPackage = () => {
    const result = value.map((item) => {
      return <PaymentItem value={item} />;
    });
    return result;
  };
  return (
    <SC.Container>
      {showPackage()}
      <SC.GroupBtn>
        <SC.Close to="/">Hủy</SC.Close>
        <SC.Submit onClick={() => props.page(2)}>Tiếp theo</SC.Submit>
      </SC.GroupBtn>
    </SC.Container>
  );
};
export default TimePackage;
