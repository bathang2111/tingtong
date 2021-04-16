import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const GroupTitle = styled.div`
  max-width: 480px;
  position: absolute;
  top: 200px;
  left: 100px;
  @media (max-width: 1200px) {
    top: 450px;
    max-width: 40%;
    left: 10px;
  }
  @media (max-width: 768px) {
    top: 500px;
    max-width: 80%;
    left: 20px;
  }
  @media (max-width: 450px) {
    top: 420px;
    left: 20px;
    max-width: 80%;
  } ;
`;

export const Title = styled.h1`
  font-size: 48px;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 35px;
  }
  @media (max-width: 450px) {
    font-size: 25px;
  } ;
`;

export const SubTitle = styled.h4`
  font-size: 20px;
  padding: 20px;
  margin: 0;
  color: #0000008a;
`;

export const Pane = styled.div`
  width: 100%;
  padding: 0 100px;
  @media (max-width: 450px) {
    padding: 20px;
  } ;
`;

export const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 450px) {
    flex-direction: column;
  } ;
`;

export const Image = styled.img`
  max-width: 60%;
  @media (max-width: 450px) {
    max-width: 80%;
  } ;
`;

export const SubPane = styled.div`
  margin-top: 50px;
`;
