import styled from "styled-components";
import worldmap from "./image/worldMap.png";

export const Container = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  @media (max-width: 665px) {
    height: 250px;
  }
`;

export const BackgroundDeco = styled.div`
  height: 100%;
  width: 75%;
  background: url(${worldmap});
  background-size: cover;
  position: absolute;
  right: 0;
`;

export const Deco2 = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 35, 54, 0.7);
  display: flex;
  align-items: center;
  @media (max-width: 665px) {
    // background: rgba(245, 180, 0, 0.5);
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Message = styled.h1`
  font-family: "Merriweather Sans";
  color: #ffffff;
  font-size: 50px;
  margin-left: 60px;
  padding: 0;
  letter-spacing: 1px;
  @media (max-width: 665px) {
    font-size: 32px;
    margin-left: 26px;
  }
`;
