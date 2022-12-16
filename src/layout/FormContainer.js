import styled from "styled-components";
import logo from "../assets/logo.svg";

export default function FormContainer({ children }) {
  return (
    <Main>
      <img src={logo} />
      {children}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 68px 36px;

  form {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 180px;
    margin-bottom: 33px;
  }

  a {
    color: var(--theme-blue-light);
    font-size: 14px;
    margin-top: 25px;
  }
`;
