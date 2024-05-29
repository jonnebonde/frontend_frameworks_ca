import PropTypes from "prop-types";
import { useContext } from "react";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../../Hooks/CartHook";
import { CartIconContainer, CartIconText } from "./index.styles";

function CartIcon({ setIsOpen }) {
  const { cart } = useContext(CartContext);

  // If the cart is empty, show the empty cart icon
  // If the cart is not empty, show the full cart icon
  // If the cart has more than 99 items, show 99+
  // If the cart has less than 100 items, show the number of items

  return (
    <CartIconContainer>
      <NavLink to="/cart" tabIndex="1" onClick={() => setIsOpen(false)}>
        {cart.totalItems === 0 ? <IoCartOutline size={40} /> : null}
        {cart.totalItems !== 0 ? <IoCart size={40} /> : null}
        <CartIconText>
          {cart.totalItems === 0
            ? ""
            : cart.totalItems > 99
              ? "99+"
              : cart.totalItems}
        </CartIconText>
      </NavLink>
    </CartIconContainer>
  );
}

CartIcon.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default CartIcon;
