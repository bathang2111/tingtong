import React from "react";
import { useSelector } from "react-redux";
import * as SC from "./style";
import Woman from "./image/student.png";

const Banner = (props) => {
  const Language = useSelector((state) => state.language);

  return (
    <SC.Container>
      <SC.Image src={Woman} />
      {/* <SC.BackgroundDeco /> */}
      <SC.Group>
        <SC.Message>{Language.welcome}</SC.Message>
        <SC.Description>
          Build English proficiency and confidence through real conversations
          with friendly tutors from the US, UK, Australia, and  more. All you
          need is your device!
        </SC.Description>
      </SC.Group>
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
