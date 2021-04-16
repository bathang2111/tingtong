import * as SC from "./style";
import SadFace from "../../assets/images/SadFace.jpg";

const Banner = (props) => {
  //   const Language = useSelector((state) => state.language);

  return (
    <SC.Container>
      <SC.Image src={SadFace} />
      <SC.Notification>Can not Load Content!!!</SC.Notification>
      {/* <SC.Notificationn>======()======</SC.Notificationn> */}
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
