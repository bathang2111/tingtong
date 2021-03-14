import styled from "styled-components";

export const Container = styled.div`
  background: #e8e9ec;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pane = styled.div`
  margin: 10px 95px 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 1088px;
  height: 246px;
  background: #ffffff;
  border-radius: 20px;
  boeder: 2px solid #c0c0c1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 185px;
  height: 185px;
  background: #000;
  margin-left: 160px;
  border-radius: 50%;
`;

export const Name = styled.span`
  font-size: 40px;
  color: #4d4c4c;
  margin-left: 50px;
`;

export const Account = styled.div`
  width: 100%;
  height: 62px;
  line-height: 62px;
  padding-left: 20px;
  margin-top: 10px;
  background: #f4f5f8;
  color: #4c4c4c;
  font-size: 20px;
  boeder: 2px solid #c0c0c1;
  border-radius: 20px 20px 0 0;
`;

export const Info = styled.div`
  width: 100%;
  height: 271px;
  background: #ffffff;
  font-size: 20px;
  boeder: 2px solid #c0c0c1;
  border-radius: 0 0 20px 20px;
`;
