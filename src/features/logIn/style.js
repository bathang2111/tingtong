import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
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

export const Logo = styled.img`
  margin-bottom: 10px;
  width: 180px;
  height: auto;
  @media (max-width: 450px) {
    display: none;
  } ;
`;

export const SmallLogo = styled.img`
  width: 30%;
  height: auto;
  padding: 5px;
  @media (min-width: 450px) {
    display: none;
  } ;
`;

export const FormLogin = styled.div`
  width: 360px;
  height: 70%;

  background-color: #ffffff;
  box-shadow: 0px 5px 5px #888b91;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
    padding: 50px 0;
  } ;
`;
