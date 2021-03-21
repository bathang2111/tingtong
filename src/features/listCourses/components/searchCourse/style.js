import styled from "styled-components";
import BookImg from "../../../../assets/images/curriculum-banner-book.png";

export const Container = styled.div`
  margin: 20px 100px 0;
  background: #ffc973;
  border-radius: 10px;
  padding: 10px 20px;
  position: relative;
`;

export const Title = styled.h2`
  color: #000000;
`;

export const SeachCoursesGroup = styled.div`
  outline: none;
  width: 300px;
  height: 35px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubTitleGroup = styled.div`
  position: absolute;
  right: 20px;
  top: 35px;
  display: flex;
  flex-direction: row;
`;

export const BookImage = styled.div`
  width: 60px;
  height: 47px;
  background: url(${BookImg});
  background-size: cover;
`;

export const SubTitle = styled.h6`
  padding: 0;
  margin: 0 10px;
  font-size: 16px;
  color: #bf6a00;
  width: 310px;
`;
