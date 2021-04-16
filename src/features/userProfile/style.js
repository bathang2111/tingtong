import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

export const SubCotainer = styled.div`
  width: calc(100% + 220px);
  height: 100%;
  display: flex;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  flex-direction: row;
  @media (max-width: 570px) {
    width: 100%;
    flex-direction: column;
    height: calc(100vh - 70px);
    overflow-y: scroll;
  }
`;
