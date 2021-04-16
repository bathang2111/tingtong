import styled from "styled-components";

export const Container = styled.div`
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 665px) {
    margin: 0;
    padding: 10px;
  }
`;

export const TypeOfCourse = styled.div`
  margin-top: 40px;
  font-size: 24px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #3e3e3e;
  margin-bottom: 8px;
  padding: 0 10px;
`;

export const Description = styled.div`
  width: 75%;
  color: #333333;
  font-size: 16px;
  padding: 10px;
  line-height: 25px;
`;

export const ListCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
`;
