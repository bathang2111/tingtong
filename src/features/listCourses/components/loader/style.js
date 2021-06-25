import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const animation = keyframes`
    from {
        background: rgba(0,0,0,0.4);
    }
    to{
        background: rgba(0,0,0,0.1)
    }
`;

export const Item = styled.div`
  width: 255px;
  height: 392px;
  padding: 8px;
  animation: ${animation} 1s linear infinite;
  margin: 20px 20px 20px 0;
`;

export const TypeOfCourse = styled.div`
  width: 300px;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 8px;
  animation: ${animation} 1s linear infinite;
`;

export const Description = styled.div`
  width: 650px;
  height: 70px;
  // width: 75%;
  animation: ${animation} 1s linear infinite;
  line-height: 25px;
`;

export const ListCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
