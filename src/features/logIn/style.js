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
  justify-content: center;
  // padding: 0 30px;
  align-items: flex-end;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 80%;
  background: #fff;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  } ;
`;

export const Title=styled.h3`
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 20;
  top: 20px;
  right: 50px;
  font-size: 20px;
  color: #fff;
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
  width: 340px;
  height: 390px;
  background-color: #ffffff;
  border: 1px solid rgba(132, 116, 161, 0.7);
  z-index: 7;
  display: flex;
  flex-direction: column;
  margin: 0 50px 0 0;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
    padding: 50px 0;
    margin: 0;
  } ;
`;
