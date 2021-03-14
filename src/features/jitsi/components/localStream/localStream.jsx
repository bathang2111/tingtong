import Webcam from "react-webcam";
import * as SC from "./style";

const LocalStream = (props) => {
  return (
    <SC.Container>
      <Webcam />
    </SC.Container>
  );
};

export default LocalStream;
