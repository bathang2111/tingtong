import styled from "styled-components";

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 10px;
  padding: 7px;

  font-family: "Poppins";
  font-size: 12px;

  border: 1px solid #dfe1e6;
  background-color: #fafbfc;
  outline-color: #4f81ee;
`;

export const Button = styled.input`
  width: 265px;
  height: 35px;
  border: 0px;
  background-color: #5aac44;

  color: white;
  font-weight: bold;
  outline-color: black;
  &.hover {
    background-color: #6ecc53;
    cursor: pointer;
  }
`;

export const TxtFailed = styled.div`
  color: red;
`;
