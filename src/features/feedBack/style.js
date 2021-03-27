import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import FeedBackIcon from "../../assets/images/feedback.png";
import StarIcon from "../../assets/images/star.png";

const animation = keyframes`
from {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

to {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);
}


`;

export const Container = styled(Modal)`
  position: absolute;
  width: 450px;
  overflow: auto;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin-top: 15px;
`;

export const Name = styled.h6`
  padding: 0;
  margin: 6px 0 0;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
`;

export const FeedBackGroup = styled.div`
  height: 40px;
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0 10px; ;
`;

export const Star = styled.div`
  width: 44px;
  height: 40px;
  background: url(${FeedBackIcon});
  background-size: cover;
  &:hover {
    transform: scale(1.3);
  }
`;

export const Form = styled.form`
  width: 240px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`;

export const Note = styled.input`
  width: 240px;
  height: 20px;
  border: none;
  font-size: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  :focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  width: 60px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background: #2f8c92;
  border: none;
  border-radius: 5px;
  :focus {
    outline: none;
  }
`;
