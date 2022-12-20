import styled from "styled-components";

const CardContainer = styled.li`
  width: 100%;
  min-height: 91px;
  padding: 15px;
  border-radius: 5px;
  background-color: white;
  transition: 0.3s;
  margin-bottom: 10px;
  position: relative;
  animation: ${({ dissapear }) => (dissapear ? "cardDissappear" : "cardAppear")}
    0.3s ease-out;

  p {
    font-size: 20px;
    margin-bottom: 8px;
  }

  ul {
    display: flex;
  }
`;

export default CardContainer;
