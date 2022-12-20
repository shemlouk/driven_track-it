import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "../components/layout-components/ProgressBar";
import { ProgressContext } from "../hooks/contexts";

export default function Menu() {
  const progress = useContext(ProgressContext);
  return (
    <StyledFooter data-test="menu">
      <Link data-test="habit-link" to="/habitos">
        Hábitos
      </Link>
      <Link data-test="today-link" to="/hoje">
        <ProgressBar name="Hoje" percentage={progress} />
      </Link>
      <Link data-test="history-link" to="/historico">
        Histórico
      </Link>
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
