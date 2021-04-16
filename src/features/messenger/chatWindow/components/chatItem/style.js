import styled from "styled-components";

export const ContainerLeft = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 5px;
`;

export const ContainerRight = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row-reverse;  
  box-sizing: border-box;
  padding-bottom: 5px;
  margin-left:auto;
`;

export const Avatar = styled.img`
  widows: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const ChatItemLeft = styled.div`
  word-break: break-word;
  margin-left: 5px;
  max-width: 100%;
  border-radius: 20px;
  padding: 10px;
  font-size: 15px;
  display: flex;
  background: #D8DADF;
  color: #333333;
`;

export const ChatItemRight = styled.div`
  word-break: break-word;
  margin-right: 10px;
  max-width: 100%;
  border-radius: 20px;
  padding: 10px;
  font-size: 15px;
  display: flex;
  background: #ffc929;
  color: #fff;
`;
