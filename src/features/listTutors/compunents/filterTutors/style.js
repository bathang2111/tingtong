import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  padding-left: 50px;
  position: relative;
`;

export const Title = styled.h2`
  color: #545455;
  // padding: 0;
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
  position: absolute;
  bottom: 20px;
  right: 20px;
  outline: none;
  width: 300px;
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
