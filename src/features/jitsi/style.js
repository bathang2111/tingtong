import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
`;

export const Loader=styled.h5`

`;


export const JitSiContainer=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #474747;
  z-zIndex: 5;
`;