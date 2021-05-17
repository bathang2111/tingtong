import styled, { keyframes } from "styled-components";
import Webcam from "react-webcam";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  flex-direction: column;
  background: black;
  align-items: center;
  // border-radius: 10px;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
    display: none;
  }
  // @media (max-width: 700px) {
  //   width: 700px;
  //   height: 350px;
  // }
  z-index: 10;
`;

export const WebCamm = styled(Webcam)`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  // z-index: -100;
  background-size: cover;
  overflow: hidden;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
`;

export const GroupReceiver = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  padding: 20px;
`;

export const Pain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  margin: 0 15px;
  height: 50px;
`;

export const Avatar = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background: none;
  border: 2px solid #fff;
`;

export const Name = styled.h4`
  max-width: 180px;
  font-size: 15px;
  padding: 0;
  margin: 0;
  color: #ffffff;
`;

export const Status = styled.div`
  color: #fff;
  font-size: 13px;
`;

export const CancleCall = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  flex-direction: column;
  background: black;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 50;
`;

export const NotiCancle = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  margin: 20px 0;
  max-width: 400px;
`;

export const GroupBTN = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;

export const CloseWindow = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  padding: 4px 25px;
  background: #1877f2;
  color: #fff;
  border-radius: 15px;
  font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background: none;
    color: #1877f2;
  }
`;

export const CallBack = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  padding: 4px 25px;
  border: 1px solid #1877f2;
  color: #1877f2;
  background: none;
  border-radius: 15px;
  font-size: 15px;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    border: none;
  }
`;

export const BackgroundLobby = styled.img`
  width: autovw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  filter: blur(15px);
`;
