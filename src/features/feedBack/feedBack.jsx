import * as SC from "./style";
import FeedBackIcon from "../../assets/images/feedback.png";
import StarIcon from "../../assets/images/star.png";
import { useDispatch, useSelector } from "react-redux";
import { CloseFeedBackLobby } from "./feedBackSlide";

const FeedBack = (props) => {
  const { feedBackStatus } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const styleStar = {
    background: `${StarIcon}`,
  };

  const feedBackk = (id) => {
    console.log(id);
  };

  const showStar = () => {
    let star = [];
    for (let t = 1; t < 6; t++) {
      star[t] = <SC.Star id={t} onClick={() => feedBackk(t)} />;
    }
    return star;
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(CloseFeedBackLobby());
    console.log("aaa");
  };

  return (
    <SC.Container
      style={{
        overlay: {
          background: "rgba(0,0,0,0.4)",
        },
      }}
      isOpen={feedBackStatus}
    >
      <SC.Avatar />
      <SC.Name>Thang dep trai</SC.Name>
      <SC.FeedBackGroup>{showStar()}</SC.FeedBackGroup>
      <SC.Form onSubmit={onHandleSubmit}>
        <SC.Note placeholder="FeedBack..." />
        <SC.Submit>Submit</SC.Submit>
      </SC.Form>
    </SC.Container>
  );
};

export default FeedBack;
