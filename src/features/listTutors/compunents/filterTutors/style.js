import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  padding: 50px;
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 665px) {
    flex-direction: column;
    padding: 5px;
    height: 80px;
  }
`;

export const Title = styled.h2`
  color: #545455;
  padding: 0;
  margin: 0;
  @media (max-width: 665px) {
    font-size: 16px;
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 20px;
  height: 47px;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  background: none;
  border: 2px solid #c4c4c4;
  color: #545455;
  border-radius: 7px;
  margin-right: 10px;
  padding: 0 20px;
  font-size: 13px;
  outline: none;
`;

export const SearchTutorsGroup = styled.div`
  // position: absolute;
  // bottom: 20px;
  // right: 20px;
  margin-left: auto;
  outline: none;
  width: 300px;
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 665px) {
    flex-direction: column;
    padding: 5px;
    width: 200px;
    height: 40px;
    margin-left: 0;
  }
`;
