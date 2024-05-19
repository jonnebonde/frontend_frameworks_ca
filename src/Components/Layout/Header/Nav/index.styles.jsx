import styled from "styled-components";

const ChangeDirection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-primary);
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    top: 70px;
    position: absolute;
    left: 0;
    right: 0;
    background: grey;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export { Nav, ChangeDirection, HamburgerContainer, Menu };
