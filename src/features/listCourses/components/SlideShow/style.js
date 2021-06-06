import styled, { keyframes } from "styled-components";
import Modal from "react-modal";


export const Container = styled(Modal)`
  position: absolute;
  width: 500px;
  height: 500px;
  overflow: auto;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  // background: #000;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

