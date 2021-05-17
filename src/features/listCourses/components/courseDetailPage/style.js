import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  //   font-family: "Merriweather Sans";
  padding: 65px;
  boxsizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const LeftGroup = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 410px;
  height: 615px;
  border-radius: 20px;
  box-shadow: 0px 5px #d8d8d8;
  border: 2px solid #d8d8d8;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Image = styled.img`
  border-radius: 20px 20px 0 0;
  width: 407px;
  height: 300px;
`;

export const Title = styled.h1`
  padding: 0 10px;
  margin: 40px 0 0;
  color: #363636;
`;

export const OtherCourse = styled.span`
  margin: 65px 0 10px;
  font-size: 20px;
  color: #363636;
  padding: 0;
`;

export const RelativeCoursesList = styled.div`
  width: 100%;
  height: 273px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const RelativeCourse = styled(Link)`
  width: 196px;
  height: 256px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;
export const RelaImage = styled.img`
  width: 178px;
  height: 137px;
`;

export const RightGroup = styled.div`
  margin-left: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const RelaTitle = styled.div`
  padding: 12px;
  font-size: 15px;
  color: #333333;
`;
export const RelaDescription = styled.div`
  padding: 0 12px;
  font-size: 13px;
  color: #333;
`;

export const OverView = styled.span`
  padding: 0;
  font-size: 20px;
  margin: 0;
  color: ;#333232;
  margin-bottom:15px;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  padding: 0;
  margin: 30px 0 0;
  color: ;#000000;
`;

export const Linkk = styled(Link)`
  text-decoration: none;
  &:hover {
    background: #f5f5f5;
  }
`;

export const Description = styled.span`
  font-size: 16px;
  color: #716d6d;
  margin-top: 10px;
`;

export const Pain = styled.div`
  widows: 10px;
  height: 25px;
`;
