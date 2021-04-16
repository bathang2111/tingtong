import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import Webcam from "react-webcam";

export const Container = styled(Modal)`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LocalVideo = styled(Webcam)`
  z-index: 0;
  width: 100vw;
  height: 100vh;
`;

export const Group = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100%;
  z-index: 1;
  height: 500px;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #fff;
`;

export const Name = styled.h3`
  max-width: 180px;
  font-size: 20px;
  padding: 0;
  margin: 20px 0 0;
  color: #ffffff;
`;

export const GrouButton = styled.div`
  width: 65%;
  height: 60px;
  display: flex;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  margin-top: auto;
`;

export const CancleButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: #ec3f31;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  :focus {
    outline: none;
  }
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
`;