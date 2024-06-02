import { useLocalStorage } from "@uidotdev/usehooks";
import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useMemo } from "react";
import cartReducer from "../../Components/Cart/CartReducer";

export const CartContext = createContext();
const initialCartState = { cart: [], total: 0, totalItems: 0 };

export const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorage("cart", initialCartState);

  const [cart, dispatch] = useReducer(
    cartReducer,
    storedCart.cart ? storedCart : initialCartState,
  );

  useEffect(() => {
    setStoredCart(cart);
  }, [cart, setStoredCart]);

  const contextValue = useMemo(() => ({ cart, dispatch }), [cart, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
