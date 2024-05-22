import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "./Logo";
import { Nav, ChangeDirection, HamburgerContainer, Menu } from "./index.styles";
import Hamburger from "hamburger-react";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu(event) {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    ) {
      setIsOpen(!isOpen);
    }
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
        <HamburgerContainer
          onClick={toggleMenu}
          $tabindex="1"
          onKeyDown={toggleMenu}
        >
          <Hamburger toggled={isOpen} label="show menu" />
        </HamburgerContainer>
        <Menu $isOpen={isOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </Menu>
        <CartIcon />
      </ChangeDirection>
    </Nav>
  );
};

export default Navbar;
