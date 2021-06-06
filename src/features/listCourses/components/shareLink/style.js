import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

export const Container = styled(Modal)`
  position: absolute;
  width: 500px;
  height: 300px;
  overflow: auto;
  padding: 15px;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background: #fff;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  width: 470px;
  height: 22px;
  font-size: 20px;
  color: #333333;
`;

export const listShare = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 470px;
  height: 100px;
  padding: 5px 0;
`;

export const GroupBtn = styled.button`
  width: 70px;
  height: 90px;
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  border: none;
  background: none;
  justify-content: space-between;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const Link = styled.div`
  padding: 0 20px;
  margin-top: 30px;
  width: 470px;
  height: 42px;
  font-size: 20px;
  // color: #333333;
  background: #f9f9f9;
  border: 1px solid #14c5ce;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
`;

export const InputLink = styled.input`
  width: 330px;
  height: 18px;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

export const CopyBtn = styled.button`
  border: none;
  background: none;
  color: #065fd4;
  font-size: 14px;
  fon-weight: 500;
  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  height: 30px;
  width: 120px;
  padding: 4px 25px;
  background: #2f8c92;
  color: #fff;

  border-radius: 5px;
  font-size: 15px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
  }
`;
