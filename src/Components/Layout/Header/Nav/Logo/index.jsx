import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function MainLogo({ setIsOpen }) {
  return (
    <NavLink to="/" onClick={() => setIsOpen(false)}>
      <h1>WeGotIt</h1>
    </NavLink>
  );
}

MainLogo.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default MainLogo;
