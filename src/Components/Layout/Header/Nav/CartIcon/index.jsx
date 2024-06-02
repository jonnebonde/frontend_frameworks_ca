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

  // I used chatgpt to help me make the code work as i wanted it to change icon according to the amount of items in the cart.
  // so credits to chatGpt for helping me with this code.

  let cartIconText;

  if (cart.totalItems === 0) {
    cartIconText = "";
  } else if (cart.totalItems > 99) {
    cartIconText = "99+";
  } else {
    cartIconText = cart.totalItems;
  }

  // or i could to this with ternary operator inside the cartIconText variable
  // but i think the above code is more readable.

  /* cart.totalItems === 0
            ? ""
            : cart.totalItems > 99
              ? "99+"
              : cart.totalItems */

  return (
    <CartIconContainer>
      <NavLink to="/checkout" onClick={() => setIsOpen(false)}>
        {cart.totalItems === 0 ? (
          <IoCartOutline size={40} />
        ) : (
          <IoCart size={40} />
        )}
        <CartIconText>{cartIconText}</CartIconText>
      </NavLink>
    </CartIconContainer>
  );
}

CartIcon.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default CartIcon;
