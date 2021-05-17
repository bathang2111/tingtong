import styled from "styled-components";

export const Container = styled.form``;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 33px;
  margin-bottom: 10px;
  padding: 10px;

  font-family: "Poppins";
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid #dfe1e6;
  background-color: #fafbfc;
  outline-color: #4f81ee;
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 250px;
  height: 35px;
  border: 0px;
  background-color: rgba(108, 87, 109, 0.9);
  color: white;
  font-weight: bold;
  outline-color: black;
  // border-radius: 20px;
  &.hover {
    // background-color: #6ecc53;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const TxtFailed = styled.div`
  color: red;
`;
