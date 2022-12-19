import styled from "styled-components";
import SubmitLoader from "../loaders/SubmitLoader";

export default function Submit({ children, disabled, adjust }) {
  return (
    <Button {...{ adjust, disabled }}>
      {disabled ? <SubmitLoader /> : children}
    </Button>
  );
}

const Button = styled.button`
  width: ${({ adjust }) => (adjust ? "84px" : "100%")};
  height: ${({ adjust }) => (adjust ? "35px" : "45px")};
  background-color: var(--theme-blue-light);
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: ${({ adjust }) => (adjust ? "16px" : "21px")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
