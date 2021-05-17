import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  background-image: linear-gradient(
    to right,
    rgba(132, 116, 161, 0.7),
    rgba(47, 140, 145, 0.7),
    #aa6f82
  );
  // background: #8474a1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 450px) {
    overflow: hidden;
  } ;
`;

export const SubContainer = styled.div`
  border-radius: 25px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // padding: 0 30px;
  // align-items: flex-end;
  box-shadow: 12px 12px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 80%;
  background: #fff;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  } ;
`;

export const Title=styled.h3`
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 20;
  top: 20px;
  left: 50px;
  font-size: 20px;
  color: #fff;
`;

export const SmallLogo = styled.img`
  width: 30%;
  height: auto;
  padding: 5px;
  margin-bottom: 30px;
  @media (min-width: 450px) {
    display: none;
  } ;
`;

export const FormSignUp = styled.form`
  width: 340px;
  height: 420px;
  background-color: #ffffff;
  border: 1px solid rgba(132, 116, 161, 0.7);
  z-index: 7;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
    padding: 50px 0;
    margin: 0;
  } ;
`;

export const Input = styled.input`
  padding: 0 10px;
  border-radius: 5px;
  width: 250px;
  height: 32px;
  border: 2px solid #dfe1e6;
  background: #fafbfc;
  color: #7b7e84;
  border-radius: 20px;
  font-size: 15px;
  // margin-top: 10px;
  ::placeholder {
    color: rgba(84, 84, 85, 0.45);
  }
  :focus {
    outline: none;
  }
`;

export const SignUpButton = styled.button`
  margin-top: 20px;
  width: 250px;
  height: 35px;
  border: 0px;
  background-color: rgba(108, 87, 109, 0.9);
  color: #ffffff;
  font-size: 15px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const SignUpFalse = styled.div`
  max-width: 250px;
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  color: #333333;
`;

export const Infofail = styled.div`
  width: 230px;
  text-align: left;
  // margin-top: 10px;
  font-size: 11px;
  color: #333333;
`;

export const Login = styled(Link)`
  text-decoration: none;
`;
