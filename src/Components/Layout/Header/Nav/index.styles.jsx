import styled from "styled-components";

export const ChangeDirection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: row-reverse;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
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
    background: var(--color-secondary);
    z-index: 1;
  }

  a {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
`;

export const HamburgerContainer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;
