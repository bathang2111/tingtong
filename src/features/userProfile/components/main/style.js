import styled from "styled-components";
import backgroundd from "../../../../assets/images/userProfileBackground.jfif";

export const Container = styled.div`
  box-sizing: border-box;
  background-image: linear-gradient(to right, #8474a1, rgba(8, 151, 144, 0.5));
  background-size: cover;
  width: calc(100% - 320px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    width: 100%;
    height: 100%;
    margin-top: 5px;
  }
`;

export const SetTing = styled.div`
  width: 80%;
  height: 500px;
  background: #ffffff;
  // box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  position: relative;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    border-left: 5px solid #729faa;
    padding: 20px;
    border-radius: 0;
  }
  @media (max-width: 570px) {
    border: none;
    box-shadow: none;
    padding: 20px;
    height: 100%;
  }
`;

export const Title = styled.h5`
  font-size: 20px;
  padding: 0 0 15px 0;
  margin: 0;
  color: #353535;
  @media (max-width: 570px) {
    display: none;
  }
`;

export const Pain = styled.div`
  font-weight: 550;
  width: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Language = styled.select`
  font-weight: 400;
  color: #353535;
  border: none;
  outline: none;
  width: 100px;
  float: left;
`;

export const Desciption = styled.option`
  font-weight: 400;
  border: none;
  outline: none;
`;

export const BtnChange = styled.button`
  width: 70px;
  height: 30px;
  background: #2f8c92;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  :focus {
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
  bottom: 20px;
  right: 20px;
  &:hover {
    background: #2f8c92;
    color: #fff;
  }
  @media (max-width: 800px) {
    position: relative;
    margin-top: auto;
  }
`;

export const GroupI = styled.div`
  // min-width: 300px;
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  padding: 10px 0;
`;

export const Variable = styled.div`
  font-size: 18px;
  width: 160px;
  font-weight: 600;
`;

export const Value = styled.div`
  font-size: 16px;
`;

export const NoData = styled.div`
  font-size: 14px;
  colort: #333333;
`;

export const UpdateBTN = styled.button`
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 12px;
  background: #2f8c92;
  color: #fff;
  &:hover {
    background: #2f8c92;
    color: #fff;
  }
`;
