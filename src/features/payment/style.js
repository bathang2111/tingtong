import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-image: linear-gradient(
    to right,
    rgba(132, 116, 161, 0.7),
    rgba(47, 140, 145, 0.7),
    #aa6f82
  );
  // background: #8474a1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 450px) {
    overflow: hidden;
  } ;
`;

export const SubContainer = styled.div`
  border-radius: 25px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // padding: 0 30px 30px;
  align-items: flex-end;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 550px;
  background: #fff;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  } ;
`;
