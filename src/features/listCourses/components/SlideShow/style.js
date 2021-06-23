import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

export const Container = styled(Modal)`
  position: absolute;
  background: #fff;
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  // padding: 20px;
  // overflow: auto;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #faa;
  outline: none;
  // display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
