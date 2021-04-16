import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #e8e9ec;
  display: flex;
  flex-direction: column;
  // padding: 0 80px;
`;

export const Line = styled.div`
  width: 100%;
  height: 10px;
  background: #e8e9ec;
`;

export const OnlineTutors = styled.h3`
  margin: 20px 0px;
  padding: 0 0 0 80px;
  font-size: 20px;
  color: #88888c;
  text-transform: uppercase;
  @media (max-width: 665px) {
    font-size: 16px;
    margin: 10px 0;
    padding: 0 0 0 10px;
  }
`;

export const Pain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const GridTutors = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  // background: #ff0;
  @media (max-width: 1189px) {
    // max-width:800px;
    justify-content: center;
  }
  @media (max-width: 800px) {
    max-width: 400px;
  }
`;
