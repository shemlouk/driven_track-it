import styled from "styled-components";

export default function DeleteButton({ deleteFunction }) {
  return (
    <Button data-test="habit-delete-btn" onClick={deleteFunction}>
      <ion-icon name="trash-outline"></ion-icon>
    </Button>
  );
}

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: none;
  position: absolute;
  top: 11px;
  right: 10px;

  ion-icon {
    width: 17px;
    height: 19px;
    color: var(--theme-gray);
  }
`;
