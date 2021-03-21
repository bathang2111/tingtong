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

// const animation = keyframes`
//   0%{
//     width: 90px;
//     height: 90px;
//   }
//   15%{
//     width: 100px;
//     height: 100px;
//   }
//   30%{
//     width: 110px;
//     height: 110px;
//   }
//   45%{
//     width: 120px;
//     height: 120px;
//   }
//   60%{
//     1idth: 130px;
//     height: 130px;
//   }
//   75%{
//     width: 140px;
//     height: 140px;
//   }
//   90%{
//     width: 150px;
//     height: 150px;
//   }
//   100%{
//     width: 160px;
//     height: 160px;
//   }

// `;

// export const Animation = styled.div`
//   animation: ${animation} 1s linear infinite;
//   transform: 'translateY()',
//   position: absolute;
//   background: none;
//   border: 2px solid rgba(255, 255, 255, 0.7);
//   border-radius: 0 0 50% 50%;
// `;

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
