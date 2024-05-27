import { useReducer, createContext, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import cartReducer, { initialCartState } from "../CartReducer";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorage("cart", initialCartState);

  const [cart, dispatch] = useReducer(
    cartReducer,
    storedCart.cart ? storedCart : initialCartState,
  );

  useEffect(() => {
    setStoredCart(cart);
  }, [cart, setStoredCart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
