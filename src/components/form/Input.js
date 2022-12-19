import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 11px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  color: var(--theme-gray);
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 8px;

  ::placeholder {
    color: #dbdbdb;
  }

  :focus {
    outline: none;
  }
`;

export default Input;
