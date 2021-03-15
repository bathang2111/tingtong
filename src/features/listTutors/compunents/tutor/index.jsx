import { useDispatch } from "react-redux";
import {
  ToggleProfileModal,
  TutorIdDetail,
} from "../../../homePage/homePageSlice";
import * as SC from "./style";

const Tutor = (props) => {
  const dispatch = useDispatch();

  const toggleProfileModal = () => {
    dispatch(ToggleProfileModal());
    dispatch(TutorIdDetail(props.info.id));
  };
  return (
    <SC.Container>
      <SC.InfoGroup>
        <SC.Avatar background={props.info.avatar}>
          {/* <SC.Ava src={props.info.avatar}/> */}
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
        <SC.CallButton to="/jitsi">Gọi</SC.CallButton>
      </SC.ButtonGroup>
    </SC.Container>
  );
};

export default Tutor;
