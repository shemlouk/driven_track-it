import { useContext, useEffect, useState } from "react";
import { apiURL, messages } from "../data/constants";
import { LoginContext } from "../hooks/LoginContext";
import { useNavigate } from "react-router-dom";
import PageContainer from "../layout/containers/PageContainer";
import CreateButton from "../components/form/CreateButton";
import PageHeader from "../components/layout-components/PageHeader";
import HabitCard from "../components/cards/HabitCard";
import FormCard from "../components/cards/FormCard";
import axios from "axios";

export default function HabitPage() {
  const [data, setData] = useState(null);
  const [forms, setForms] = useState([]);
  const [update, setUpdate] = useState(0);
  const navigate = useNavigate();
  const context = useContext(LoginContext);

  useEffect(() => {
    if (context === null) {
      navigate("/");
      return;
    }
    axios
      .get(apiURL.habit(""), context.config)
      .then((res) => setData(res.data))
      .catch(() => alert("Não foi possível carregar os dados!"));
  }, [update]);

  function updatePage() {
    setUpdate(update + 1);
  }

  return (
    <PageContainer isDataLoaded={data !== null}>
      <PageHeader title="Meus hábitos">
        <CreateButton
          createFunction={() => {
            if (forms.length > 0) return;
            setForms([
              <FormCard
                key={forms.length}
                deleteCard={() => setForms([])}
                update={updatePage}
              />,
            ]);
          }}
        />
      </PageHeader>
      {data !== null && (
        <>
          <ul>
            {forms}
            {data.map((d) => (
              <HabitCard key={d.id} {...d} update={updatePage} />
            ))}
          </ul>
          <p>{data.length === 0 && messages.habits.default}</p>
        </>
      )}
    </PageContainer>
  );
}
