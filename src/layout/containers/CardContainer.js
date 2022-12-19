import styled from "styled-components";

const FormContainer = styled.li`
  width: 100%;
  min-height: 91px;
  padding: 15px;
  border-radius: 5px;
  background-color: white;
  transition: 0.3s;
  margin-bottom: 10px;
  position: relative;
  animation: cardAppear 0.3s ease-out;

  p {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export default FormContainer;
