import styled from "styled-components";
import backgroundd from "../../../../assets/images/userProfileBackground.jfif"

export const Container = styled.div`
  box-sizing:border-box;
  // background: #3fb3bb;
  background: #ffc929; 
  background-size:cover;
  width: calc(100% - 540px);
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const SetTing = styled.div`
    width: 50%;
    height: 500px;
    background: #ffffff;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
    border-radius:15px;
    padding: 20px 0;
    display: flex;
    flex-direction:column;
    align-items:center;
    position: relative;
`;

export const Title = styled.h5`
  font-size:18px;
  padding: 0;
  margin: 0;
  color: #353535;
`;

export const Pain = styled.div`
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
`;

export const Language = styled.select`
  margin-left: 20px;
  color: #353535;
  border:none;
  outline: none;
  width: 100px;
  float: left;
`;

export const Desciption = styled.option`
  border:none;
  outline: none;
`;

export const BtnChange = styled.button`
  width: 70px;
  height: 30px;
  background: #2f8c92;
  color:#ffffff;
  border: none;
  border-radius:5px;
  :focus{
    outline: none;
  }
`;

export const LogOut = styled.button`
  height: 30px;
  width: 75px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 12px;
  // background: #2f8c92;
  // background: #ffc929; 
  background: none;
  color: #000;
  position: absolute;
  bottom:20px;
  right:20px;
  &:hover{
    background: #2f8c92;
    color:#fff;
  }
`;


