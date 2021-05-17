import React, { useEffect, useState } from "react";
import * as SC from "./style.js";
import Close from "../../../../assets/images/CancelIcon.png";

const Header = (props) => {
  return (
    <SC.Container>
      <SC.LinkBTN></SC.LinkBTN>
      <SC.LinkBTN
        onClick={() => props.changePage(1)}
        style={props.page == 1 ? { borderBottom: "2px solid #7A8F97" } : {}}
      >
        Gói thời gian
      </SC.LinkBTN>
      <SC.LinkBTN
        onClick={() => props.changePage(2)}
        style={props.page == 2 ? { borderBottom: "2px solid #7A8F97" } : {}}
      >
        Mã giảm giá
      </SC.LinkBTN>
      <SC.LinkBTN
        onClick={() => props.changePage(3)}
        style={props.page == 3 ? { borderBottom: "2px solid #7A8F97" } : {}}
      >
        Phương thức thanh toán
      </SC.LinkBTN>
      <SC.Close to="/">
        <SC.Image src={Close} />
      </SC.Close>
    </SC.Container>
  );
};
export default Header;
