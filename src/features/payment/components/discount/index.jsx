import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../paymentSlide.js";
import * as SC from "./style.js";

const DisCount = (props) => {
  const { timePackage } = useSelector((state) => state.payment);
  const { price } = useSelector((state) => state.payment);
  const [coupon, setCoupon] = useState(0);
  const dispatch = useDispatch();
  const discount = [
    {
      percentDiscount: 10,
      time: "01/01/22",
    },
    {
      percentDiscount: 20,
      time: "01/01/22",
    },
  ];

  useEffect(() => {
    dispatch(setPrice(sumPrice()));
  }, [coupon]);

  const sumPrice = () => {
    let result;
    if (coupon == 0) {
      result = timePackage.price;
      return result;
    } else {
      result = (timePackage.price * (100 - coupon)) / 100;
      return result;
    }
  };

  const showDisCountItem = () => {
    const result = discount.map((item) => {
      return (
        <SC.SubItem>
          <SC.DisCountItem>
            <SC.Avatar />
            <SC.Pain>
              <SC.Title>Giảm {item.percentDiscount}%</SC.Title>
              <SC.Description>Áp dụng cho tất cả dơn hàng</SC.Description>
              <SC.HSD>HSD: {item.time}</SC.HSD>
            </SC.Pain>
            <SC.ChooseBtn
              onClick={() => {
                setCoupon(item.percentDiscount);
              }}
            >
              Áp dụng
            </SC.ChooseBtn>
          </SC.DisCountItem>
        </SC.SubItem>
      );
    });
    return result;
  };

  return (
    <SC.Container>
      <SC.Group>
        <SC.ListItem>{showDisCountItem()}</SC.ListItem>
      </SC.Group>
      <SC.Group
        style={{
          alignItems: "flex-end",
        }}
      >
        <SC.Form>
          <SC.TitleRight>Đơn hàng</SC.TitleRight>
          <SC.Name>Tên gói: </SC.Name>
          <SC.Value>
            <span> {timePackage.name ? timePackage.name : "Chưa chọn"}</span>
          </SC.Value>
          <SC.Name>Giá: </SC.Name>
          <SC.Value>
            <span> {timePackage.price ? timePackage.price : "Chưa chọn"}</span>
          </SC.Value>
          <SC.Name>Chiết khấu</SC.Name>
          <SC.Value>
            <span> {coupon}%</span>
          </SC.Value>
          <SC.Support>
            <SC.Sum>Thành tiền:</SC.Sum>
            <SC.Sum style={{ fontWeight: "500px", color: "#2f8c92" }}>
              {sumPrice()}vnd
            </SC.Sum>
          </SC.Support>
        </SC.Form>
      </SC.Group>
      <SC.GroupBtn>
        <SC.Close>Hủy</SC.Close>
        <SC.Submit
          onClick={() => {
            props.page(3);
          }}
        >
          Tiếp theo
        </SC.Submit>
      </SC.GroupBtn>
    </SC.Container>
  );
};
export default DisCount;
