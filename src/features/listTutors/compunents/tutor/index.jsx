import { useDispatch, useSelector } from "react-redux";
import {
  ToggleProfileModal,
  TutorIdDetail,
} from "../../../homePage/homePageSlice";
import { OpenRequestLobby, SetTutorsReceive } from "../../../jitsi/jitsiSlide";
import * as SC from "./style";

const Tutor = (props) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state);

  const handleclick = () => {
    dispatch(SetTutorsReceive(props.info));
    dispatch(OpenRequestLobby());
  };

  const toggleProfileModal = () => {
    dispatch(ToggleProfileModal());
    dispatch(TutorIdDetail(props.info.id));
  };
  return (
    <SC.Container>
      <SC.InfoGroup>
        <SC.Avatar background={props.info.avatar}>
          <SC.IsOnline/>
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
        <SC.ProfileButton onClick={toggleProfileModal}>
          Profile
        </SC.ProfileButton>
        <SC.CallButton onClick={handleclick}>{language.call}</SC.CallButton>
      </SC.ButtonGroup>
    </SC.Container>
  );
};

export default Tutor;
