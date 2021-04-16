import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export const Container = styled(Modal)`
  position: absolute;
  width: 45%;
  // height: 100vh;
  overflow: auto;
  top: 10px;
  right: 10px;
  bottom: auto;
  padding: 10px 10px 40px 10px;
  background: #ffffff;
  outline: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 665px) {
    display: none;
  }
`;

export const Linkk = styled(Link)`
  // padding=left: 10px;
  widows: 100%;
  height: 40px;
  color: #228891;
  background: none;
  line-height: 40px;
  text-decoration: none;
  text-transform: capitalize;
`;
