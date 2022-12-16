import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Container from "../layout/Container";
import PageTitle from "../components/main/PageTitle";
import { apiURL, messages, weekdays } from "../data/constants";
import { LoginContext } from "../hooks/LoginContext";

export default function TodayPage() {
  const [data, setData] = useState(null);
  const config = useContext(LoginContext).config;

  function getDate() {
    const today = new Date();
    return `${weekdays[today.getDay()]}, ${today
      .toLocaleDateString("pt-BR")
      .substring(0, 5)}`;
  }

  useEffect(() => {
    axios
      .get(apiURL.today, config)
      .then((res) => setData(res.data))
      .catch(() => alert("Não foi possível carregar os dados!"));
  }, []);

  return (
    <Container isDataLoaded={data !== null}>
      <PageTitle
        title={getDate()}
        subtitle={messages.today.default}
      ></PageTitle>
    </Container>
  );
}
