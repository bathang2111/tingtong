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
  animation: ${animation} 1s linear infinite;
  position: absolute;
  width: 200px;
  height: 300px;
  overflow: auto;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,0.5);
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 50%;
  margin-top: 40px;
`;

export const Groupbtn = styled.div`
  margin-top: 100px;
  width: 200px;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
`;

export const CancelCallBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #ec3f31;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReceiveCallBtn = styled(CancelCallBtn)`
  background: #54cf61;
  margin-left: auto;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
