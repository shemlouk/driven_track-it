import { useContext, useState } from "react";
import { apiURL, weekdays } from "../../data/constants";
import { LoginContext } from "../../hooks/LoginContext";
import CardContainer from "../../layout/containers/CardContainer";
import WeekdayButton from "../form/WeekdayButton";
import DeleteButton from "../form/DeleteButton";
import CardLoader from "../loaders/CardLoader";
import axios from "axios";

export default function HabitCard({ id, name, days, update }) {
  const [animation, setAnimation] = useState(false);
  const context = useContext(LoginContext);

  function deleteHabit() {
    setAnimation(true);
    axios
      .delete(apiURL.habit(id), context.config)
      .then(() => update())
      .catch(() => {
        alert("Não foi possível deletar o hábito!");
        setAnimation(false);
      });
  }

  return (
    <CardContainer>
      {animation && <CardLoader />}
      <p>{name}</p>
      {Object.keys(weekdays).map((k) => (
        <WeekdayButton key={k} disabled selected={days.includes(Number(k))}>
          {weekdays[k].charAt(0)}
        </WeekdayButton>
      ))}
      <DeleteButton deleteFunction={deleteHabit} />
    </CardContainer>
  );
}
