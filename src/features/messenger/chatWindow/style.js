import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 80px;
  width: 328px;
  height: 450px;
  background: #fff;
  border-radius: 10px 10px 0 0;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 0 35px 0 rgb(154 161 171 / 35%);
  z-index: 1;
  @media (max-width: 450px) {
    width: 100vw;
    height: calc(100vh - 80px);
    right: 0;
    z-index: 10;
  }
`;
