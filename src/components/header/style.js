import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuHeader from "../../assets/images/MenuHeader.png";

export const Container = styled.div`
  width: 100vw;
  height: 70px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 24px;
  position: fixed;
  z-index: 3;
  @media (max-width: 768px) {
    padding: 0 15px 0 0;
  }
  @media (max-width: 450px) {
    padding: 0;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  height: 70px;
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
  @media (max-width: 450px) {
    height: auto;
  }
`;

export const Lin = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  padding: 10px 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgSmall = styled.img`
  padding: :0;
  width: 90px;
  height: auto;
  @media (min-width: 768px) {
    display: none;
  };
  @media (max-width: 450px) {
    width: 70px;
    height: auto;
  }
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
  @media (max-width: 665px) {
    display: none;
  }
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
  @media (max-width: 665px) {
    display: none;
  }
`;

export const BtnSignUp = styled(Link)`
  height: 44px;
  width: 100px;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  // background: #2f8c92;
  color: #ffffff;
  background: #c6c953;
  margin-right: 10px;
  text-decoration: none;
  line-height: 44px;
  text-align: center;
  @media (max-width: 450px) {
    width: 60px;
    height: 28px;
    line-height: 28px;
    border-radius: 4px;
  }
`;

export const Message = styled.button`
  position: relative;
  outline: none;
  border: none;
  background: none;
  width: 48px;
  height: 48px;
  padding: 12px;
  box-sizing-border-box;
  margin-right:5px;
`;

export const Noti = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0 5px;
  height: 19px;
  line-height: 19px;
  border-radius: 50%;
  background: #f00;
  color: #fff;
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
  @media (max-width: 665px) {
    display: none;
  }
`;

export const Menu = styled.button`
  // margin-right: 5px;
  width: 28px;
  height: 28px;
  box-sizing: border-box;
  margin-right: 15px;
  // padding: 12px;
  background: url(${MenuHeader});
  background-size: cover;
  background-position: center;
  border: none;
  &:focus {
    outline: none;
  }
  @media (min-width: 665px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
