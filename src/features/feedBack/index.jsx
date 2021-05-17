import * as SC from "./style";
import { useDispatch, useSelector } from "react-redux";
import { CloseFeedBackLobby } from "./feedBackSlide";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import FeedBackApi from "../../api/feedbackApi";

const FeedBack = (props) => {
  const { feedBackStatus } = useSelector((state) => state.feedback);
  const { Tutor } = useSelector((state) => state.feedback);
  const [star, setStar] = useState(0);
  const dispatch = useDispatch();

  const ChangeStar = (value) => {
    console.log(value);
    setStar(value);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    dispatch(CloseFeedBackLobby());
    const body = { rating: star, feedback: "" };
    try {
      const res = await FeedBackApi.postFeedBack(Tutor.id, body);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SC.Container
      style={{
        overlay: {
          background: "rgba(0,0,0,0.4)",
          zIndex: "100",
        },
      }}
      isOpen={feedBackStatus}
    >
      <SC.Avatar src={Tutor.avatar} />
      <SC.Name>{Tutor.name}</SC.Name>
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
          <SC.Submit>Đánh giá</SC.Submit>
      </SC.Form>
    </SC.Container>
  );
};

export default FeedBack;
