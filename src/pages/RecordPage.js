import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../hooks/contexts";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../data/constants";
import * as dayjs from "dayjs";
import RecordsCalendar from "../components/layout-components/RecordsCalendar";
import PageContainer from "../layout/containers/PageContainer";
import PageHeader from "../components/layout-components/PageHeader";
import axios from "axios";

export default function RecordPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const context = useContext(LoginContext);

  useEffect(() => {
    if (context === null) {
      navigate("/");
      return;
    }
    axios
      .get(apiURL.record, context.config)
      .then((res) => setData(getDays(res.data)))
      .catch(() => alert("Não foi possível carregar os dados!"));
  }, []);

  function setClassNameToTile({ date, view }) {
    if (view !== "month") return;
    const fdate = dayjs(date).format("DD/MM/YYYY");
    if (fdate === dayjs(new Date()).format("DD/MM/YYYY")) return;
    const index = data.findIndex((d) => d.day === fdate);
    if (index > -1) return data[index].className;
  }

  function getDays(arr) {
    const green = arr.filter((date) =>
      date.habits.every((h) => h.done === true)
    );
    const red = arr.filter((date) => date.habits.some((h) => h.done === false));
    return [
      ...green.map((f) => {
        return { day: f.day, className: "green" };
      }),
      ...red.map((f) => {
        return { day: f.day, className: "red" };
      }),
    ];
  }

  return (
    <PageContainer isDataLoaded={data !== null}>
      <PageHeader title="Histórico" />
      <RecordsCalendar tileClassName={setClassNameToTile} />
    </PageContainer>
  );
}
