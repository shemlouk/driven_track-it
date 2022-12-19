import { useContext, useState } from "react";
import { apiURL, weekdays } from "../../data/constants";
import { LoginContext } from "../../hooks/LoginContext";
import CardContainer from "../../layout/containers/CardContainer";
import WeekdayButton from "../form/WeekdayButton";
import CancelButton from "../form/CancelButton";
import styled from "styled-components";
import Submit from "../form/Submit";
import Input from "../form/Input";
import axios from "axios";

export default function FormCard({ deleteCard, update }) {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const context = useContext(LoginContext);

  function submit(e) {
    e.preventDefault();
    if (days.length === 0) {
      alert("Selecione no mínimo um dia da semana!");
      return;
    }
    axios
      .post(apiURL.habit(""), { name, days }, context.config)
      .then(() => {
        update();
        deleteCard();
      })
      .catch(() => alert("Não foi possível enviar os dados!"));
  }

  function selectDay(d) {
    if (!days.includes(d)) {
      setDays([...days, d]);
      return;
    }
    days.splice(days.indexOf(d), 1);
    setDays([...days]);
  }

  return (
    <CardContainer>
      <form onSubmit={(e) => submit(e)}>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="nome do hábito"
          required
        />
        <ul>
          {Object.keys(weekdays).map((k) => (
            <li key={k}>
              <WeekdayButton
                type="button"
                selected={days.includes(Number(k))}
                onClick={() => selectDay(Number(k))}
              >
                {weekdays[k].charAt(0)}
              </WeekdayButton>
            </li>
          ))}
        </ul>
        <ButtonsContainer>
          <CancelButton type="button" onClick={deleteCard}>
            Cancelar
          </CancelButton>
          <Submit adjust>Salvar</Submit>
        </ButtonsContainer>
      </form>
    </CardContainer>
  );
}

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 29px;
`;
