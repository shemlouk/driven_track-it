import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PageContainer from "../layout/containers/PageContainer";
import PageHeader from "../components/layout-components/PageHeader";
import { apiURL, messages, weekdays } from "../data/constants";
import { LoginContext } from "../hooks/LoginContext";
import { useNavigate } from "react-router-dom";

export default function TodayPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const context = useContext(LoginContext);

  useEffect(() => {
    if (context === null) {
      navigate("/");
      return;
    }
    axios
      .get(apiURL.today, context.config)
      .then((res) => setData(res.data))
      .catch(() => alert("Não foi possível carregar os dados!"));
  }, []);

  function getDate() {
    const today = new Date();
    return `${weekdays[today.getDay()]}, ${today
      .toLocaleDateString("pt-BR")
      .substring(0, 5)}`;
  }

  return (
    <PageContainer isDataLoaded={data !== null}>
      <PageHeader
        title={getDate()}
        subtitle={messages.today.default}
      ></PageHeader>
    </PageContainer>
  );
}
