import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
`;

export const Logo = styled.div`
  position: relative;
  display: flex;
  height: 100px;
`;

export const Lin = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img``;

export const BtnLogIn = styled(Link)`
  text-align: center;
  text-decoration: none;
  width: 100px;
  height: 60px;
  line-height: 60px;
  background: none;
  border: none;
  border-radius: 15px;
  outline: none;
  font-size: 22px;
  margin-left: auto;
  margin-right: 10px;
  &:hover {
    background: #e8e9ec;
  }
`;

export const BtnSignUp = styled.button`
  width: 168px;
  height: 64px;
  box-sizing: border-box;
  padding: 6px 10px;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 22px;
  background: #c6c953;
  color: #ffffff;
`;

export const TutorLink = styled(Link)`
  font-size: 20px;
  color: #4c4c4c;
  margin-left: 50px;
  text-decoration: none;
  text-transform: uppercase;
`;

export const CoursesLink = styled(TutorLink)`
  margin-left: 30px;
`;

export const Group = styled.div`
  box-sizing: border-box;
  width: 450px;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: ;
`;

export const BtnSubcribe = styled.button`
  height: 55px;
  width: 160px;
  box-sizing: border-box;
  border-radius: 15px;
  border: none;
  outline: none;
  font-size: 14px;
  background: #2f8c92;
  color: #ffffff;
  letter-spacing: 1px;
`;

export const Message = styled.button`
  outline: none;
  border: none;
  background: none;
`;

export const CalenDar = styled.button`
  outline: none;
  border: none;
  background: none;
`;

export const Avatar = styled.div`
  border-radius: 50%;
  background: #000;
  width: 68px;
  height: 68px;
`;
