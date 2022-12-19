import styled from "styled-components";
import Header from "../Header";
import Menu from "../Menu";
import LoadingPage from "../../components/loaders/PageLoader";

export default function PageContainer({ children, isDataLoaded }) {
  return (
    <>
      <Header />
      <Main>{isDataLoaded ? children : <LoadingPage />}</Main>
      <Menu />
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  background-color: #f2f2f2;
  overflow: scroll;
  padding: 100px 16px 110px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--theme-gray);

  ul,
  p {
    width: 100%;
  }

  p {
    line-height: 23px;
  }
`;
