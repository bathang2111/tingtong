import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const LeftGroup = styled.div`
  width: 310px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const Avatar = styled.div`
  width: 280px;
  height: 330px;
  display: flex;
  flex-direction: column;
  // text-align: center;
`;

export const Image = styled.img`
  width: 280px;
  height: 210px;
`;

export const Title = styled.h3`
  padding: 0 10px;
  margin: 20px 0 10px;
  color: #363636;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  padding: 0 10px;
`;

export const ListLessons = styled.h6`
  margin: 25px 0 10px;
  font-size: 20px;
  color: #363636;
  padding: 0;
`;

export const GroupLesson = styled.div`
  width: 100%;
  // padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const RightGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

export const STTLesson = styled.span`
  padding: 0;
  font-size: 12px;
  margin: 0;
  color: ;#0000008A;
  margin-bottom:15px;
`;

export const NameLesson = styled.h4`
  margin: 0;
  padding: 0;
  color: #333333;
  font-size: 34px;
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
