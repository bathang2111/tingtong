import styled from "styled-components";

export const OrTxt = styled.div`
  display: flex;

  width: 265px;
  height: 40px;

  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div`
  height: 2px;
  width: 110px;
  background-color: #888b91;
`;

export const BtnAuth = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 250px;
  height: 40px;
  padding-left: 15px;
  margin-bottom: 15px;

  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0;

  color: #505f79;
  font-size: 13px;
  font-weight: bold;

  outline: 1px;
  &.hover {
    cursor: pointer;
    background-color: rgba(194, 204, 224, 0.2);
  }
`;

export const Img = styled.img`
  margin-right: 10px;
`;
