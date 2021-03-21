import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
  border-bottom: ;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #e8e9ec;
`;

export const Logo = styled.div`
  position: relative;
  display: flex;
  max-width: 183px;
  height: 100%;
  box-sizing: border-box;
`;

export const Lin = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  padding: 10px 20px;
`;

export const BtnLogIn = styled(Link)`
  text-align: center;
  text-decoration: none;
  width: 60px;
  height: 40px;
  line-height: 40px;
  background: none;
  border: none;
  border-radius: 15px;
  outline: none;
  font-size: 14px;
  margin-left: auto;
  margin-right: 10px;
  &:hover {
    background: #e8e9ec;
  }
`;

export const TutorLink = styled(Link)`
  font-size: 14px;
  color: #4c4c4c;
  padding: 6px 8px;
  text-decoration: none;
  text-transform: uppercase;
`;

export const CoursesLink = styled(TutorLink)``;

export const Group = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

export const BtnSubcribe = styled.button`
  height: 44px;
  width: 100px;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  background: #2f8c92;
  color: #ffffff;
  margin-right: 50px;
`;

export const BtnSignUp = styled(BtnSubcribe)`
  background: #c6c953;
  margin-right: 10px;
`;

export const Message = styled.button`
  outline: none;
  border: none;
  background: none;
  width: 48px;
  height: 48px;
  padding: 12px;
  box-sizing-border-box;
  margin-right:5px;
`;

export const CalenDar = styled(Message)``;

export const Icon = styled.img`
  width: 27px;
  height: 24px;
`;

export const btnAvatar = styled(Link)`
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  padding: 12px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
