import { useDispatch, useSelector } from "react-redux";
import CallVideoApi from "../../../../api/callVideoApi";
import {
  ToggleProfileModal,
  TutorIdDetail,
} from "../../../homePage/homePageSlice";
import { OpenRequestLobby, SetTutorsReceive } from "../../../jitsi/jitsiSlide";
import * as SC from "./style";
import Ripples from "react-ripples";

const Tutor = (props) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);
  const left = (window.screen.width - 700) / 2;
  const top = (window.screen.height - 380) / 2;

  const onRequestTheCall = async () => {
    // click event call video
    localStorage.setItem("receiverId", props.info.id);
    const room = await CallVideoApi.RequestCallVideo({
      userId: props.info.userID,
    });
    const callerId = localStorage.getItem("idUser");
    window.open(
      `https://tingtong.xyz/video-call/${room.id}/${callerId}/${props.info.userID}`,
      "Data",
      `height=380,width=700,left=${left},top=${top}`
    );
  };

  const toggleProfileModal = () => {
    dispatch(ToggleProfileModal());
    dispatch(TutorIdDetail(props.info.id));
  };
  return (
    <SC.Pain>
      <SC.Container>
        <SC.InfoGroup>
          <SC.Avatar background={props.info.avatar}>
            {props.info.isOnline ? <SC.IsOnline /> : ""}
          </SC.Avatar>

          <SC.Info>
            <SC.GroupName>
              <SC.Name>{props.info.name}</SC.Name>
              <SC.Love />
            </SC.GroupName>
            <SC.Feedback>
              <SC.Star />
              <SC.Star />
              <SC.Star />
              <SC.Star />
              <SC.HaffStar />
              <span>. 5.0</span>
            </SC.Feedback>
            <SC.EnsignGroup>
              <SC.Ensign />
              <SC.Nation>{props.nation}</SC.Nation>
            </SC.EnsignGroup>
          </SC.Info>
        </SC.InfoGroup>
        <SC.Introduce>
          <span>{props.info.introduction}</span>
        </SC.Introduce>
        <SC.ButtonGroup>
          <Ripples>
            <SC.ProfileButton onClick={toggleProfileModal}>
              Profile
            </SC.ProfileButton>
          </Ripples>
          <Ripples>
            <SC.CallButton onClick={onRequestTheCall}>
              {language.call}
            </SC.CallButton>
          </Ripples>
        </SC.ButtonGroup>
      </SC.Container>
    </SC.Pain>
  );
};

export default Tutor;
