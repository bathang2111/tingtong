import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
  :position: relative;
  margin-right: 30px;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 5px #d8d8d8;
  border: 2px solid #d8d8d8;
  border-radius: 15px;
`;

export const CourseDetail = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  &:hover {
    background: rgba(246, 246, 246, 0.3);
  }
`;

export const Img = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 187px;
`;

export const Title = styled.span`
  font-size: 18px;
  color: #585858;
  margin: 10px 0 0;
  padding: 0;
`;

export const SubTitle = styled.span`
  font-size: 15px;
  margin-top: 5px;
  color: #898989;
  padding: 0;
`;

export const Cover = styled.h4``;
