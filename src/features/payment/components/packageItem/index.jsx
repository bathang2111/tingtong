import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTimePackage, setPrice } from "../../paymentSlide.js";
import succes from "../../../../assets/images/iconSucces.png";
import * as SC from "./style.js";

const PaymentItem = (props) => {
  const { timePackage } = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const value = props.value;
  return (
    <SC.Container>
      <SC.Background />
      <SC.Avatar>
        <SC.Image src={value.image} />
      </SC.Avatar>
      <SC.Pain>
        <SC.Timer>{value.time} giờ</SC.Timer>
        <SC.Cost>{value.price}vnd</SC.Cost>
        <SC.Choose
          onClick={() => {
            dispatch(setPrice(value.price));
            dispatch(setTimePackage(value));
          }}
        >
          Chon
        </SC.Choose>
      </SC.Pain>
      {value.name == timePackage.name ? <SC.IconSucces src={succes} /> : ""}
    </SC.Container>
  );
};
export default PaymentItem;
