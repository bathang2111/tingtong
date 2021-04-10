import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import { CloseFeedBackLobby } from "./feedBackSlide";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import FeedBackApi from "../../api/feedbackApi";

const FeedBack = (props) => {
  const { feedBackStatus } = useSelector((state) => state.feedback);
  const { InfoTutor } = useSelector((state) => state.jitsi);
  const [star, setStar] = useState(0);
  const dispatch = useDispatch();

  const ChangeStar = (value) => {
    setStar(value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    dispatch(CloseFeedBackLobby());
    console.log("aaa");
    const res = await FeedBackApi.postFeedBack("91776606011397128");
    console.log(res);
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
      <SC.Avatar src={InfoTutor.avatar} />
      <SC.Name>{InfoTutor.name}</SC.Name>
      <SC.FeedBackGroup>
        <StarRatings
          numberOfStars={5}
          changeRating={ChangeStar}
          rating={star}
          starHoverColor="rgba(255,255,0,0.5)"
          starRatedColor="#ff0"
          starDimension="45px"
          starSpacing="5px"
        />
      </SC.FeedBackGroup>
      <SC.Form onSubmit={onHandleSubmit}>
        <SC.Note placeholder="FeedBack..." />
        <SC.Submit>Submit</SC.Submit>
      </SC.Form>
    </SC.Container>
  );
};

export default FeedBack;
