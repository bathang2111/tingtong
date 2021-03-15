import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  background: #eeeeee;
  padding: 10px 100px 0;
  margin-top: 100px;
  border-top:2px solid rgba(0,0,0,0.3);
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

export const Image = styled.img`
  width: 25px;
  height: 25px;
  filter: grayscale(100%);
  opacity: 0.5;
`;
