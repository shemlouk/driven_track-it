import styled from "styled-components";

export default function CreateButton({ createFunction }) {
  return (
    <Button data-test="habit-create-btn" onClick={createFunction}>
      <ion-icon name="add-outline"></ion-icon>
    </Button>
  );
}

const Button = styled.button`
  width: 40px;
  height: 35px;
  background-color: var(--theme-blue-light);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 27px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
