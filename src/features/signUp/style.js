import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
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

export const Logo = styled.img`
  margin-bottom: 10px;
  width: 180px;
  height: auto;
  @media (max-width: 450px) {
    display: none;
  } ;
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

export const FormSignUp = styled.div`
  width: 360px;
  height: 70%;
  padding: 30px 0 0;

  background-color: #ffffff;
  box-shadow: 0px 5px 5px #888b91;

  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-around;
  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
    padding: 50px 0 0;
  } ;
`;

export const Input = styled.input`
  padding: 0 10px;
  border-radius: 5px;
  width: 250px;
  height: 40px;
  border: 2px solid #dfe1e6;
  background: #fafbfc;
  color: #7b7e84;
  border-radius: 20px;
  font-size: 15px;
  margin-top: 20px;
  ::placeholder {
    color: rgba(84, 84, 85, 0.45);
  }
  :focus {
    outline: none;
  }
`;

export const SignUpButton = styled.button`
  margin-top: 50px;
  width: 250px;
  height: 40px;
  background: #5aac44;
  color: #ffffff;
  font-size: 15px;
  border-radius: 20px;
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
