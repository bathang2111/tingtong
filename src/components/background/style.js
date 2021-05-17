import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 25px;
  position: absolute;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 5;
`;

const animation = keyframes`
  0%,20%{
    transform: translateY(0%);
  }
  33%,53%{
    transform: translateY(-100%);
  }
  67%,100%{
    transform: translateY(-200%);
  }

`;
const common = styled.div`
  animation: ${animation} 10s infinite;
  font-family: "Montserrat", sans-serif;
  animation-timing-function: cubic-bezier(0, 3.61, 1, 1)
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:${(props) => props.position};
`;

export const Group = styled.div`
  position: relative;
  padding-right: 50px;
  width: auto;
  height: 100%;
`;

export const Back1 = styled(common)`
  background-image: linear-gradient(to right, #de9ca0, #b3bdd8);
`;
export const Description = styled.div`
  width: 420px;
  font-size: 20px;
  color: #fff;
  margin: 20px 0 0 70px;
`;
export const Title = styled.h3`
  font-size: 28px;
  padding: 20px;
  margin: 0;
  color: #fff;
`;
export const Image1 = styled.img`
  position: absolute;
  left: 50px;
  bottom: 50px;
  width: auto;
  height: 40%;
`;
export const Image2 = styled.img`
  position: absolute;
  left: 300px;
  bottom: 30px;
  width: auto;
  height: 40%;
`;

export const Back2 = styled(common)`
  background: #fff;
`;
export const Group2 = styled.div`
  padding: 30px;
  width: auto;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.position};
`;

export const Descrip2 = styled.div`
  text-align: ${(props) => props.text};
  width: 220px;
  font-size: 15px;
  color: #333333;
  // margin: 20px 0 0 70px;
`;
export const Image3 = styled.img`
  height: 114px;
  width: auto;
  margin: 0 30px;
`;

export const Back3 = styled(common)`
  background: #ddd6e3;
`;
export const Group3 = styled.div`
  height: 100%;
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SubTitle3 = styled.h2`
  font-size: 20px;
  width: 450px;
  margin: 0;
  padding: 20px;
  color: #fff;
  text-align: ${(props) => props.text};
`;

export const Logo2 = styled.img`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 110px;
  height: 110px;
`;
