import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimePackage, setPrice } from "../../paymentSlide.js";
import succes from "../../../../assets/images/iconSucces.png";
import * as SC from "./style.js";

const PaymentItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <SC.Container>
      <SC.Background />
      <SC.Avatar>
        <SC.Image src={item.image} />
      </SC.Avatar>
      <SC.Pain>
        <SC.Timer>{item.time} giờ</SC.Timer>
        <SC.Cost>{item.price}vnd</SC.Cost>
      </SC.Pain>
    </SC.Container>
  );
};
export default PaymentItem;
