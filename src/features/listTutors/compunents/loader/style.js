import styled, { keyframes } from "styled-components";

const animation = keyframes`
    from {
        background: rgba(0,0,0,0.4);
    }
    to{
        background: rgba(0,0,0,0.1)
    }
`;

export const Item = styled.div`
  font-family: serif;
  transition: all 0.2s;
  width: 390px;
  height: 300px;
  animation: ${animation} 1s linear infinite;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  margin: 0 5px 10px;
`;
