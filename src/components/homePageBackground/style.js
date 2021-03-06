import styled, { keyframes } from "styled-components";
import SubLogo from "./image/SubLogo.png";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const background1 = keyframes`
  0% ,28% {
   background: #ff614f;
  }

  33%,51% {
    background: #ffc929;
  }

  66%,95% {
      background: #54bac4;
  }

`;

const background2 = keyframes`
  0%,28% {
   background: #fdbbb8;
  }

  33%,61%{
    background: #ffeab2;
  }

 66%,95%{
      background: #94d6da;
  }

`;

export const Div1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fdbbb8;
  animation: ${background2} 15s ease-in-out infinite;
  clip-path: circle(70% at right -20%);
  z-index: 0;
  transition: 0s;
`;

export const Div2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ff614f;
  animation: ${background1} 15s ease-in-out infinite;
  clip-path: circle(70% at right -30%);
  z-index: 1;
  transition: 0s;
`;

const logo = keyframes`
  0%,28% {
   background: #FFC712;
  }

  33%,61%{
    background: #FE614E;
  }

 66%,95% {
      background: #F0E5D5;
  }

`;

export const Logo = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: #ffc712;
  animation: ${logo} 15s ease-in-out infinite;
  box-shadow: 0px 7px 8px -4px rgb(0 0 0 / 20%),
    0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%);
  top: 10%;
  right: 20%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 450px) {
    width: 250px;
    height: 250px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const rotate = keyframes`
  from {
   transform: rotat3d(1,1,1,0deg);
  }

  to {
    transform: rotate3d(1,1,1,360deg);
  }

`;

export const Tingtong = styled.div`
  animation: ${rotate} 5s linear infinite;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url(${SubLogo});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 10px solid #182b54;
`;
