import styled from "styled-components";
import SearchIcon from './icon/searchIcon.png'

export const SearchForm = styled.form`
  border: 2px solid #c4c4c4;
  border-radius: 7px;
  bottom: 20px;
  right: 20px;
  outline: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubmitButton = styled.i`
  width: 19px;
  height: 19px;
  margin-left: 10px;
  background: url(${SearchIcon});
  border: none;
  outline: none;
`;



export const InputSearch = styled.input`
  margin-left: 10px;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  color:#545455;
  ::placeholder {
    color: rgba(84,84,85,0.65);
  }
  :focus {
    outline: none;
  }
`;
