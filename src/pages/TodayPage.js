import { useContext, useEffect, useState } from "react";
import { LoginContext, ProgressContext } from "../hooks/contexts";
import { apiURL, messages, weekdays } from "../data/constants";
import { useNavigate } from "react-router-dom";
import PageContainer from "../layout/containers/PageContainer";
import PageHeader from "../components/layout-components/PageHeader";
import TodayCard from "../components/cards/TodayCard";
import axios from "axios";

export default function TodayPage({ setProgress }) {
  const [updateCard, setUpdateCard] = useState(0);
  const [update, setUpdate] = useState(0);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const progress = useContext(ProgressContext);
  const context = useContext(LoginContext);

  useEffect(() => {
    if (context === null) {
      navigate("/");
      return;
    }
    axios
      .get(apiURL.today, context.config)
      .then((res) => {
        setData(res.data);
        setUpdateCard(updateCard + 1);
        setProgress(getProgress(res.data));
      })
      .catch(() => {
        alert("Não foi possível carregar os dados!");
        setUpdateCard(updateCard + 1);
      });
  }, [update]);

  function getDate() {
    const today = new Date();
    return `${weekdays[today.getDay()]}, ${today
      .toLocaleDateString("pt-BR")
      .substring(0, 5)}`;
  }

  function getProgress(arr) {
    const ratio = arr.filter((d) => d.done === true).length / arr.length;
    return (ratio * 100).toFixed(0);
  }

  return (
    <ProgressContext.Provider value={progress}>
      <PageContainer isDataLoaded={data !== null}>
        <PageHeader
          changeColor={progress > 0}
          title={getDate()}
          subtitle={
            progress == 0
              ? messages.today.default
              : messages.today.progress(progress)
          }
        ></PageHeader>
        {data !== null && (
          <ul>
            {data.map((d) => (
              <TodayCard
                key={d.key}
                {...d}
                updatePage={() => setUpdate(update + 1)}
                update={updateCard}
              />
            ))}
          </ul>
        )}
      </PageContainer>
    </ProgressContext.Provider>
  );
}
