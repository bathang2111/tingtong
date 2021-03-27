import React from "react";
import { useSelector } from "react-redux";
import * as SC from "./style";

const Banner = (props) => {
  const Language = useSelector((state) => state.language);

  return (
    <SC.Container>
      <SC.BackgroundDeco />
      <SC.Deco2>
        <SC.Message>{Language.welcome}</SC.Message>
      </SC.Deco2>
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
