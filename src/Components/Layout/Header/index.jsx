import styled from "styled-components";
import NavBar from "./Nav";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: transparent;
  z-index: var(--z-fixed);
`;

function Header() {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
}

export default Header;
