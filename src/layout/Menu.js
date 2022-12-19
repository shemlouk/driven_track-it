import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "../components/layout-components/ProgressBar";

export default function Menu() {
  return (
    <StyledFooter>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje">
        <ProgressBar name="Hoje" percentage={66} />
      </Link>
      <Link to="/historico">Histórico</Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 31px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  z-index: 1px;

  a {
    text-decoration: none;
    font-size: 18px;
    color: var(--theme-blue-light);
  }

  a:nth-child(2) {
    width: 91px;
    transform: translateY(-25px);
  }
`;
