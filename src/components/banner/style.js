import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 100%;
  // background: #089790;
  // background-image: linear-gradient(#089790, #8474a1);
  background-image: linear-gradient(
    to right,
    #8474a1,
    rgba(8, 151, 144, 0.75),
    #aa6f82
  );
  position: relative;
  display: flex;
  overflow: hidden;
  @media (max-width: 665px) {
    height: 250px;
  }
`;

export const Image = styled.img`
  height: 90%;
  width: auto;
  position: absolute;
  bottom: 0;
  right: 90px;
  @media (max-width: 665px) {
    right: 10px;
  }
`;

export const Group = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  @media (max-width: 665px) {
    margin-left: 0;
  }
`;

export const Message = styled.h1`
  font-family: "Montserrat", sans-serif;
  height: 50px;
  color: #fff;
  font-size: 40px;
  margin-top: 50px;
  margin-left: 60px;
  padding: 0;
  letter-spacing: 1px;
  @media (max-width: 665px) {
    font-size: 32px;
    max-width: 80%;
    margin-top: 30px;
    margin-left: 26px;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  margin: 0 0 0 100px;
  line-height: 25px;
  // width: 310px;
  color: #fff;
  max-width: 390px;
  @media (max-width: 665px) {
    display: none;
  }
`;
