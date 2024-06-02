import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LogoText } from "./index.styles";

function MainLogo({ setIsOpen }) {
  return (
    <NavLink to="/" onClick={() => setIsOpen(false)}>
      <LogoText>WeGotIt</LogoText>
    </NavLink>
  );
}

MainLogo.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default MainLogo;
