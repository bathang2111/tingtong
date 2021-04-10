import Modal from "react-modal";
import styled from "styled-components";

export const Container = styled.button`
  width: 340px;
  height: 70px;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const Pain = styled.div`
  margin: 0 0 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.span`
  font-size: 15px;
  color: #050505;
`;

export const LastMessage = styled.span`
  font-size: 13px;
  color: #65676b;
  padding: 5px;
`;
