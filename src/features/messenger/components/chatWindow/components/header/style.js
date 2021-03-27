import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction:row;
  background: #ffffff;
  border-radius:10px 10px 0 0;
  box-sizing:border-box;
  padding: 0 10px;
  align-items: center;
  border-bottom:0.5px solid rgba(0,0,0,0.3);
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius:50%;
`;

export const Pain = styled.div`
  margin-left:auto; 
  display: flex;
  flex-direction:row;
  align-items: center;
`;

export const Cancle = styled.img`
  width: 20px;
  height: 20px;
  filter: grayscale(0%);
  // opacity: 0.5;
`;

export const ArrowBtn = styled.img`
  width: 30px;
  height: 30px;
  margin-right:5px;
  transform: rotate(-90deg);
`;



