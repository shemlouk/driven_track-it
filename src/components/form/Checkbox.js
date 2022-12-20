import styled from "styled-components";
import check from "../../assets/check.svg";

export default function Checkbox({ checkFunction, status }) {
  return (
    <>
      <Box
        data-test="today-habit-check-btn"
        type="checkbox"
        checked={status}
        onChange={checkFunction}
      />
      <Checkmark src={check} />
    </>
  );
}

const Box = styled.input`
  width: 69px;
  height: 69px;
  background-color: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  position: absolute;
  top: 13px;
  right: 13px;

  :checked {
    background-color: var(--theme-green);
    border: none;
  }
`;

const Checkmark = styled.img`
  height: 28px;
  position: absolute;
  top: 33px;
  right: 28px;
  pointer-events: none;
`;
