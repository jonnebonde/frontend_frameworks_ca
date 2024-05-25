import { useReducer, createContext } from "react";
import cartReducer, { initialCartState } from "../CartReducer";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const propTypes = {
  children: PropTypes.node.isRequired,
};

CartProvider.propTypes = propTypes;

export default CartContext;
