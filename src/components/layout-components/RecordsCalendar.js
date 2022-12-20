import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export default function RecordsCalendar(props) {
  return (
    <Div>
      <Calendar locale="pt-BR" {...props} />
    </Div>
  );
}

const Div = styled.div`
  width: 95%;

  .react-calendar {
    border: none;
    border-radius: 10px;
  }

  .green {
    background-color: var(--theme-green);
    color: white;
  }

  .red {
    background-color: var(--theme-red);
    color: white;
  }
`;
