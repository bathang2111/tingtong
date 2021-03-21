import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
//   justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin: 10px 0 10px;
`;

export const FormSignUp = styled.form`
  width: 430px;
  height: 80vh;

  background-color: #ffffff;
  box-shadow: 0px 5px 5px #888b91;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.input`
  padding: 0 20px 0;
  width: 345px;
  height: 60px;
  border: 2px solid #dfe1e6;
  background: #fafbfc;
  color:#7B7E84;
  font-size:18px;
  ::placeholder {
    color: rgba(84, 84, 85, 0.45);
  }
  :focus {
    outline: none;
  }
`;

export const SignUpButton = styled.button`
  width: 345px;
  height: 50px;
  background: #5aac44;
  color: #ffffff;
  font-size: 25px;
  border:none;
  :focus {
    outline: none;
  }
`;
