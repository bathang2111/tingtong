import styled from "styled-components";

export const Container = styled.div`
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  @media (max-width: 665px) {
    margin: 0;
    padding: 10px;
  }
`;