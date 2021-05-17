import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../../assets/images/LogoSmall.png";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 55px);
  // background: #ffa;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 100px 30px;
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // background: #ffa;
  // border: 1px solid black;
  height: 100%;
`;

export const AtmCard = styled.img`
  width: 100%;
  height: auto;
`;

/////////-------------FORM--------------//////////////////////////
export const Form = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // background: #ff0;
`;

export const TitleRight = styled.div`
  padding: 30px 0 35px;
  margin: 0;
  font-size: 20px;
  letter-spacing: 1.5px;
  // text-align: center;
`;

export const Name = styled.div`
  font-size: 13px;
  color: #65676b;
  // padding: 5px 0;
  // width: 160px;
  // text-align: left;
  // display: block;
  white-space: nowrap;
  overflow: hidden;
`;

export const Value = styled.div`
  padding: 5px 20px;
  margin: 5px 0 15px;
  height: 25px;
  // background: #ffa;
  border-bottom: 1px solid black;
`;

export const Select = styled.select`
  padding: 5px 20px;
  margin: 5px 0 15px;
  height: 30px;
  // background: #ffa;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  &:focus{
    outline: none;
  }
`;
export const Support = styled.div`
  margin-top: 30px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;
export const Sum = styled.div`
  font-size: 20px;
  letter-spacing: 1.5px;
  padding: 0 5px 0 0;
`;

///////////////////////////////////////////////////////////////

export const GroupBtn = styled.div`
  position: absolute;
  // width: 300px;
  // justify-content: space-between;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: row;
`;

export const Close = styled.button`
  height: 30px;
  width: 120px;
  padding: 4px 25px;
  color: #000;
  background: none;

  border-radius: 15px;
  font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
  }
`;

export const Submit = styled.button`
  // height: 30px;
  font-size: 20px;
  // width: 120px;
  padding: 4px 25px;
  background: #2f8c92;
  color: #fff;

  border-radius: 5px;
  // font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #ffffff;
    color: #000000;
  }
`;
