import { LoginContext } from "../hooks/LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const context = useContext(LoginContext);
  const profilePicture = context && context.image;

  return (
    <StyledHeader>
      <Link to="/hoje">TrackIt</Link>
      <div>
        <img src={profilePicture} />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: var(--theme-blue-dark);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 10px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;

  a {
    font-family: "Playball", sans-serif !important;
    font-size: 39px;
    color: white;
    text-decoration: none;
  }

  div {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  img {
    height: 51px;
    transition: 0.3s;
    :hover {
      transform: scale(1.1);
    }
  }
`;
