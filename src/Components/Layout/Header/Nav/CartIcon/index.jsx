import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
/* import { IoCart } from "react-icons/io5"; */

function CartIcon({ setIsOpen }) {
  return (
    <NavLink to="/cart" tabIndex="1" onClick={() => setIsOpen(false)}>
      <IoCartOutline size={40} />
    </NavLink>
  );
}

CartIcon.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default CartIcon;
