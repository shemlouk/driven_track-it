import { InfinitySpin } from "react-loader-spinner";
import styled from "styled-components";

export default function PageLoader() {
  return (
    <Div>
      <InfinitySpin width="200" color="var(--theme-blue-light)" />
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;
