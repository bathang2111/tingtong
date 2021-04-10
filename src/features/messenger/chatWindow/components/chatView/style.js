import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  // background: #000;
  box-sizing: border-box;
  padding: 5px;
  overflow-y: scroll;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
  @media (max-width: 450px) {
    width: 100vw;
    height: calc(100% - 88px);
    right: 0;
    z-index: 10;
  }
`;
