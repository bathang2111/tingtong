import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as SC from "./style.js";
import AtmCard from "../../../../assets/images/imageAtmCard.png";
import PaymentApi from "../../../../api/paymentApi.js";

const DisCount = (props) => {
  const { timePackage, price } = useSelector((state) => state.payment);
  const [bankCode, setBank] = useState("");

  const onHandleChange = (event) => {
    setBank(event.target.value);
  };

  const onHandleSubmit = async () => {
    const body = {
      orderID: "125dasddasdasdasasd",
      amount: price * 100,
      bankCode: bankCode,
      orderDescription: "description",
      orderType: "popup",
      locale: "vn",
      currCode: "VND",
    };

    try {
      const res = await PaymentApi.CreateLinkVnPay(body);
      window.location.replace(res.payment_url);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SC.Container>
      <SC.Group>
        <SC.AtmCard src={AtmCard} />
      </SC.Group>

      <SC.Group
        style={{
          alignItems: "flex-end",
        }}
      >
        <SC.Form>
          <SC.TitleRight>Thanh toán</SC.TitleRight>
          <SC.Name>Loại thanh toán: </SC.Name>
          <SC.Value>Mua gói thời gian</SC.Value>
          <SC.Name>Số tiền: </SC.Name>
          <SC.Value>{price}vnd</SC.Value>
          <SC.Name>Ngân hàng</SC.Name>
          <SC.Select name="bankcode" onChange={onHandleChange}>
            <option value="">Không chọn </option>
            <option value="VNPAYQR">VNPAYQR</option>
            <option value="VNBANK">LOCAL BANK</option>
            <option value="IB">INTERNET BANKING</option>
            <option value="ATM">ATM CARD</option>
            <option value="INTCARD">INTERNATIONAL CARD</option>
            <option value="VISA">VISA</option>
            <option value="MASTERCARD"> MASTERCARD</option>
            <option value="JCB">JCB</option>
            <option value="UPI">UPI</option>
            <option value="VIB">VIB</option>
            <option value="VIETCAPITALBANK">VIETCAPITALBANK</option>
            <option value="SCB">Ngan hang SCB</option>
            <option value="NCB">Ngan hang NCB</option>
            <option value="SACOMBANK">Ngan hang SacomBank </option>
            <option value="EXIMBANK">Ngan hang EximBank </option>
            <option value="MSBANK">Ngan hang MSBANK </option>
            <option value="NAMABANK">Ngan hang NamABank </option>
            <option value="VNMART"> Vi dien tu VnMart</option>
            <option value="VIETINBANK">Ngan hang Vietinbank </option>
            <option value="VIETCOMBANK">Ngan hang VCB </option>
            <option value="HDBANK">Ngan hang HDBank</option>
            <option value="DONGABANK">Ngan hang Dong A</option>
            <option value="TPBANK">Ngân hàng TPBank </option>
            <option value="OJB">Ngân hàng OceanBank</option>
            <option value="BIDV">Ngân hàng BIDV </option>
            <option value="TECHCOMBANK">Ngân hàng Techcombank </option>
            <option value="VPBANK">Ngan hang VPBank </option>
            <option value="AGRIBANK">Ngan hang Agribank </option>
            <option value="MBBANK">Ngan hang MBBank </option>
            <option value="ACB">Ngan hang ACB </option>
            <option value="OCB">Ngan hang OCB </option>
            <option value="IVB">Ngan hang IVB </option>
            <option value="SHB">Ngan hang SHB </option>
          </SC.Select>
          <SC.Support>
            <SC.Close>Hủy</SC.Close>
            <SC.Submit onClick={onHandleSubmit}>Xác nhận</SC.Submit>
          </SC.Support>
        </SC.Form>
      </SC.Group>
    </SC.Container>
  );
};
export default DisCount;
