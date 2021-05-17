import styled from "styled-components";
import BookImg from "../../../../assets/images/curriculum-banner-book.png";

export const Container = styled.div`
  margin: 20px 100px 0;
  background-image: linear-gradient(
    to right,
    #8474a1,
    rgba(8, 151, 144, 0.75),
    #aa6f82
  );
  border-radius: 10px;
  padding: 10px 20px;
  position: relative;
  @media (max-width: 665px) {
    margin: 0px;
    width: 100%;
    border-radius: 0;
  }
`;

export const Title = styled.h2`
  color: #fff;
  @media (max-width: 665px) {
    font-size: 16px;
  }
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
  @media (max-width: 665px) {
    flex-direction: column;
    // padding: 5px;
    width: 200px;
    margin-left: 0;
  }
`;

export const SubTitleGroup = styled.div`
  position: absolute;
  right: 20px;
  top: 35px;
  display: flex;
  flex-direction: row;
  @media (max-width: 955px) {
    display: none;
  }
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
  color: #fff;
  width: 310px;
`;
