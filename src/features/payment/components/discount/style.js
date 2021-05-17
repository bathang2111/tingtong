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

//////////-----------LIST DISCOUNT ----------------------------------------///////////////////////
export const ListItem = styled.div`
  padding-top: 30px;
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const SubItem = styled.div`
  width: 380px;
  // height: 82px;
  padding: 10px 0;
`;

export const DisCountItem = styled.button`
  position: relative;
  width: 380px;
  padding: 8px 15px;
  height: 72px;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  background: none;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #f0f2f5;
  }
`;

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  background: url(${Logo});
  // background: #000;
  background-size: cover;
  background-position: center;
  // border-radius: 50%;
`;

export const Pain = styled.div`
  margin: 0 0 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.span`
  font-size: 15px;
  color: #050505;
  font-weight: 600;
`;

export const HSD = styled.div`
  font-size: 13px;
  // color: #65676b;
  padding: 5px 0;
  // width: 160px;
  text-align: left;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  // text-overflow: ellipsis;
`;

export const Description = styled.div`
  font-size: 11px;
  color: #65676b;
  padding: 5px 0;
  // width: 160px;
  text-align: left;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  // text-overflow: ellipsis;
`;

export const Timer = styled.div`
  font-size: 11px;
  color: #65676b;
  padding: 5px;
  margin-left: 20px;
`;

export const ChooseBtn = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  height: 30px;
  // width: 120px;
  padding: 4px 12px;
  background: #2f8c92;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 5px;
  font-size: 13px;
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

/////////////////////////////////////////////////////////////////////////////////////////

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
  height: 30px;
  width: 120px;
  padding: 4px 25px;
  background: #2f8c92;
  color: #fff;

  border-radius: 15px;
  font-size: 15px;
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
