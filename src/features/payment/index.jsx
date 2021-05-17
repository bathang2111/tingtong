import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import PaymentMethod from "./components/paymentMethod";
import DisCount from "./components/discount";
import TimePackage from "./components/timePackage/index.jsx";
import * as SC from "./style.js";

const Payment = (props) => {
  const [page, setPage] = useState(1);
  return (
    <SC.Container>
      <SC.SubContainer>
        <Header changePage={(value) => setPage(value)} page={page} />
        {page == 1 ? <TimePackage page={(value) => setPage(value)} /> : ""}
        {page == 2 ? <DisCount page={(value) => setPage(value)} /> : ""}
        {page == 3 ? <PaymentMethod page={(value) => setPage(value)} /> : ""}
      </SC.SubContainer>
    </SC.Container>
  );
};
export default Payment;
