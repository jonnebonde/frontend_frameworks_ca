import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "./Logo";
import { Nav, ChangeDirection, HamburgerContainer, Menu } from "./index.styles";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickOutside(event) {
    if (!event.target.closest("nav") && isOpen) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Nav>
      <MainLogo />
      <ChangeDirection>
        <div></div>
        <HamburgerContainer onClick={toggleMenu}>
          <Hamburger toggled={isOpen} />
        </HamburgerContainer>
        <Menu $isOpen={isOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Menu>
        <div>CartLogo</div>
      </ChangeDirection>
    </Nav>
  );
};

export default Navbar;
