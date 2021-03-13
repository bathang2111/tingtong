import React from "react";
import { useSelector } from "react-redux";
import * as SC from "./style";

const Banner = (props) => {
  const onLogin = useSelector((state) => state.login.checkLogin);

  return (
    <SC.Container>
      <SC.BackgroundDeco />
      {onLogin ? (
        <SC.Deco1>
          <SC.Message>Wellcome to Tingtong</SC.Message>
        </SC.Deco1>
      ) : (
        <SC.Deco2>
          <SC.Message>Wellcome to Tingtong</SC.Message>
        </SC.Deco2>
      )}
    </SC.Container>
  );
};

export default Banner;

{
  /* <SC.Container>
<SC.BackgroundDeco />
<SC.Deco>
  <SC.Message>Wellcome to Tingtong</SC.Message>
</SC.Deco>
</SC.Container> */
}
