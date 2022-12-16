import styled from "styled-components";
import LoadingSubmit from "../animations/LoadingSubmit";

export default function Submit({ children, disabled, adjust }) {
  return (
    <Button {...{ adjust, disabled }}>
      {disabled ? <LoadingSubmit /> : children}
    </Button>
  );
}

const Button = styled.button`
  width: ${({ adjust }) => (adjust ? "40px" : "100%")};
  height: ${({ adjust }) => (adjust ? "35px" : "45px")};
  background-color: var(--theme-blue-light);
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: ${({ adjust }) => (adjust ? "26px" : "21px")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
