import PageTitle from "../components/main/PageTitle";
import Container from "../layout/Container";
import Submit from "../components/form/Submit";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../hooks/LoginContext";
import axios from "axios";
import { apiURL, messages } from "../data/constants";

export default function HabitPage() {
  const [data, setData] = useState(null);
  const config = useContext(LoginContext).config;

  useEffect(() => {
    axios
      .get(apiURL.habit(""), config)
      .then((res) => setData(res.data))
      .catch(() => alert("Não foi possível carregar os dados!"));
  }, []);

  return (
    <Container isDataLoaded={data !== null}>
      <PageTitle title="Meus hábitos">
        <Submit adjust>+</Submit>
      </PageTitle>

      <p>{!data && messages.habits.default}</p>
    </Container>
  );
}
