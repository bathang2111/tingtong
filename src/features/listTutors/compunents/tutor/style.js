import { Link } from "react-router-dom";
import styled from "styled-components";
import LoveIcon from "../../../../assets/images/Love.png";
import StarIcon from "../../../../assets/images/star.png";
import HaffStarIcon from "../../../../assets/images/HaffStar.png";

export const Pain = styled.div`
  widows: 410px;
  padding: 0 5px;
`;
export const Container = styled.div`
  font-family: serif;
  transition: all 0.2s;
  width: 390px;
  height: 270px;
  background: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  margin: 0 0 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const InfoGroup = styled.div`
  width: 355px;
  height: 95px;
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.div`
  position: relative;
  width: 95px;
  height: 85px;
  border-radius: 10px;
  margin: 0px;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center center;
`;

export const IsOnline = styled.div`
  width: 21px;
  height: 21px;
  position: absolute;
  background: rgb(6, 202, 6);
  bottom: -5px;
  right: -5px;
  border: 4px solid #fff;
  border-radius: 50%;
`;

export const Ava = styled.img`
  max-width: 95px;
  max-height: 85px;
`;

export const Info = styled.div`
  margin-left: 20px;
  width: 240px;
  height: 85px;
  display: flex;
  flex-direction: column;
`;
export const GroupName = styled.div`
  width: 240px;
  height: 25px;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.h1`
  font-family: "Merriweather Sans";
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  color: #000000;
  text-transform: capitalize;
`;

export const Love = styled.div`
  width: 29px;
  height: 24px;
  background: url(${LoveIcon});
  background-size: cover;
  margin-left: auto;
`;

export const Feedback = styled.div`
  // width: 115px;
  height: 16px;
  display: flex;
  flex-direction: row;
`;

export const Star = styled.div`
  width: 16px;
  height: 15px;
  background: url(${StarIcon});
  background-size: cover;
`;

export const HaffStar = styled(Star)`
  background: url(${HaffStarIcon});
`;

export const EnsignGroup = styled.div`
  width: 107px;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Ensign = styled.image`
  width: 48px;
  height: 45px;
  background: #e8e9ec;
`;

export const Nation = styled.span`
  margin-left: 5px;
  font-size: 13px;
  color: #88888c;
`;

export const Introduce = styled.div`
  font-family: cabin;
  margin: 10px;
  font-size: 13px;
  color: #88888c;
`;

export const ButtonGroup = styled.div`
  width: 157px;
  height: 34px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  flex-direction: row;
`;

export const ProfileButton = styled(Link)`
  text-decoration: none;
  width: 74px;
  height: 34px;
  background: #d5d5dc;
  color: #000000;
  text-align: center;
  line-height: 34px;
  border-radius: 5px;
`;

export const CallButton = styled(ProfileButton)`
  background: #2f8c92;
  color: #ffffff;
  margin-left: auto;
`;
