import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

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
  background: #000;
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
  // width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6px 0 10px; ;
`;

export const Form = styled.form`
  width: 340px;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
`;

export const Note = styled.input`
  width: 240px;
  height: 25px;
  border: none;
  border-radius: 15px;
  font-size: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  :focus {
    outline: none;
  }
`;


export const Submit = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  padding: 4px 25px;
  background: #2F8C92;
  color: #fff;
  border-radius: 15px;
  font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
  }
`;
