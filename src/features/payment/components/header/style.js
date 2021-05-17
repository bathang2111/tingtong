import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 25px;
  //   flex: 3;
`;

export const LinkBTN = styled(Link)`
  flex: 1;
  text-decoration: none;
  height: 100%;
  border-bottom: 2px solid #c5e1e5;
  line-height: 55px;
  text-align: center;
  //   background: #ffa;
`;

export const Close = styled(Link)`
  width: 55px;
  height: 55px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Image=styled.img`
  width: 15px;
  height: 15px;
`;
