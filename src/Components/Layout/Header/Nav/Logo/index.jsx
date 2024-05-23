import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function MainLogo({ setIsOpen }) {
  return (
    <NavLink to="/" onClick={() => setIsOpen(false)}>
      WeGotIt
    </NavLink>
  );
}

MainLogo.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default MainLogo;
