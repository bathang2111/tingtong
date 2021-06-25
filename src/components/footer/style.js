import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  position: relative;
  bottom: 0;
  flex-direction: row;
  background: #eeeeee;
  padding: 10px 100px 0;
  // margin-top: 100px;
  // border-top:2px solid rgba(0,0,0,0.3);
  padding: 30px;
`;

export const Pain = styled.div`
  flex: 2.5;
`;

export const Main = styled.div`
  flex: 1;
`;

export const GroupIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Parent = styled.div`
  width: 28px;
  height: 28px;
  padding: 5px;
`;

export const Image = styled.img`
  width: 23px;
  height: 23px;
  filter: grayscale(100%);
  opacity: 0.5;
`;
