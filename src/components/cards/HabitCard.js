import { useContext, useState } from "react";
import { apiURL, weekdays } from "../../data/constants";
import { LoginContext } from "../../hooks/contexts";
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
    <CardContainer data-test="habit-container">
      {animation && <CardLoader />}
      <p data-test="habit-name">{name}</p>
      {Object.keys(weekdays).map((k) => (
        <WeekdayButton
          data-test="habit-day"
          key={k}
          disabled
          selected={days.includes(Number(k))}
        >
          {weekdays[k].charAt(0)}
        </WeekdayButton>
      ))}
      <DeleteButton
        deleteFunction={() => {
          if (!window.confirm("Tem certeza que deseja deletar esse hábito?"))
            return;
          deleteHabit();
        }}
      />
    </CardContainer>
  );
}
