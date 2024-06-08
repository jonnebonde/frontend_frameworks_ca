import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useMemo } from "react";
import cartReducer from "../CartReducer";
import { useLocalStorageState } from "../LocalStorage";

export const CartContext = createContext();
const initialCartState = { cart: [], total: 0, totalItems: 0 };

export const CartProvider = ({ children }) => {
  const [storedCart, setStoredCart] = useLocalStorageState(
    "cart",
    initialCartState,
  );

  const [cart, dispatch] = useReducer(
    cartReducer,
    storedCart.cart ? storedCart : initialCartState,
  );

  useEffect(() => {
    setStoredCart(cart);
  }, [cart, setStoredCart]);

  // I was recommened by sonarcloud to use useMemo to avoid unnecessary re-renders
  // But im not sure if it is necessary in this case because i cant see any re-renders happening.

  const contextValue = useMemo(() => ({ cart, dispatch }), [cart, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
