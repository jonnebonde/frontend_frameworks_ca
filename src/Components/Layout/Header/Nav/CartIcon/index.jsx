import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { CartIconContainer, CartIconText } from "./index.styles";
import { IoCart } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../../../../Hooks/CartHook/CartContext";

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
