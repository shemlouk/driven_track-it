import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { apiURL } from "../../data/constants";
import { LoginContext } from "../../hooks/contexts";
import CardContainer from "../../layout/containers/CardContainer";
import Checkbok from "../form/Checkbox";
import CardLoader from "../loaders/CardLoader";

export default function TodayCard({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  updatePage,
  update,
}) {
  const [toggle, setToggle] = useState(false);
  const context = useContext(LoginContext);

  useEffect(() => setToggle(false), [update]);

  function checkHabit() {
    setToggle(true);
    axios
      .post(apiURL[done ? "uncheck" : "check"](id), {}, context.config)
      .then(() => updatePage())
      .catch(() => alert("Não foi possível alterar status da tarefa!"));
  }

  return (
    <CardContainer>
      {toggle && <CardLoader />}
      <p>{name}</p>
      <Div>
        <p>
          Sequência atual: <Span toggle={done}>{currentSequence} dias</Span>
        </p>
        <p>
          Seu record:{" "}
          <Span toggle={currentSequence === highestSequence && done}>
            {highestSequence} dias
          </Span>
        </p>
      </Div>
      <Checkbok status={done} checkFunction={checkHabit} />
    </CardContainer>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 13px;
    line-height: 16px;
    margin: 0px;
  }
`;

const Span = styled.span`
  color: ${({ toggle }) =>
    toggle ? "var(--theme-green)" : "var(--theme-gray)"};
`;
