import styled from "styled-components";

const WeekdayButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? "#d4d4d4" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#d4d4d4")};
  font-size: 20px;
  margin-right: 4px;
`;

export default WeekdayButton;
