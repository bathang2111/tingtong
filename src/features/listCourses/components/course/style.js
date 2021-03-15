import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 275px;
  height: 392px;
  padding: 8px;
`;

export const CourseDetail = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 5px #d8d8d8;
  border: 2px solid #d8d8d8;
  border-radius: 15px;
  text-decoration: none;
  width: 257px;
  height: 374px;
  &:hover {
    background: rgba(246, 246, 246, 0.5);
  }
`;

export const Img = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 193px;
`;

export const Title = styled.span`
  font-size: 18px;
  color: #585858;
  margin: 12px 12px 0;
  padding: 0;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  margin: 12px;
  color: #898989;
  padding: 0;
`;

export const Cover = styled.h4``;
