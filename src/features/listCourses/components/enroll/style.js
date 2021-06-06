import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

export const Container = styled(Modal)`
  position: absolute;
  width: 500px;
  height: 250px;
  overflow: auto;
  padding: 15px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #fff;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  width: 470px;
  height: 22px;
  font-size: 20px;
  color: #333333;
`;

export const Enroll = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  height: 30px;
  width: 120px;
  padding: 4px 25px;
  background: #2f8c92;
  color: #fff;

  border-radius: 5px;
  font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
  }
`;

export const Close = styled(Enroll)`
  right: 150px;
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Li = styled.li`
  padding: 10px 0;
  color: #333333;
`;
