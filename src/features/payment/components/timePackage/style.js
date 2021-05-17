import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 55px);
  // background: #ffa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0 100px 50px;
`;

export const GroupBtn = styled.div`
  position: absolute;
  // width: 300px;
  // justify-content: space-between;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: row;
`;

export const Close = styled(Link)`
  text-decoration: none;
  height: 30px;
  width: 120px;
  // padding: 4px 25px;
  color: #000;
  background: none;
  line-height: 30px;
  text-align: center;
  border-radius: 15px;
  font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
  }
`;

export const Submit = styled.button`
  height: 30px;
  width: 120px;
  padding: 4px 25px;
  background: #2f8c92;
  color: #fff;

  border-radius: 15px;
  font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;
