import styled from "styled-components";

export default function PageTitle({ children, title, subtitle, changeColor }) {
  return (
    <StyledDiv toggle={changeColor}>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      {subtitle}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ toggle }) => (toggle ? "var(--theme-green)" : "#bababa")};
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 20px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 23px;
    line-height: 29px;
    color: var(--theme-blue-dark);
  }
`;
