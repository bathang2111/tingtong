import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 320px;
  // background: #ffa;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 5px 5px 30px 0 rgba(0, 0, 0, 0.2);
  // border: 1px solid #2f8c92;
  padding: 0 0 10px 0;
`;

export const Background = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 25px 25px 0 0;
  background-image: linear-gradient(#8474a1, rgba(8, 151, 144, 0.75), #aa6f82);
`;

export const Avatar = styled.div`
  position: absolute;
  top: 40px;
  width: 140px;
  height: 140px;
  border-radius: 25px;
  background: #fff;
  // transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
`;

export const Pain = styled.div`
  width: 100%;
  height: 60%;
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: #ffa;
  flex-direction: column;
`;

export const Timer = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const Cost = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: #333;
`;

export const Choose = styled.button`
  height: 30px;
  border-radius: 5px;
  padding: 5px 20px;
  border: none;
  outline: none;
  font-size: 14px;
  background: #2f8c92;
  color: #fff;
`;

export const IconSucces = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
