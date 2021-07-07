import Modal from "react-modal";
import styled from "styled-components";

export const Container = styled(Modal)`
  position: absolute;
  top: 60px;
  right: 10px;
  width: 360px;
  height: 500px;
  background: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 0 35px 0 rgb(154 161 171 / 35%);
  @media (max-width: 450px) {
    width: 100vw;
    height: calc(100vh - 80px);
    right: 0;
    top: 70px;
    z-index: 10;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 24px;
  margin: 0;
  padding: 10px 10px 0;
`;