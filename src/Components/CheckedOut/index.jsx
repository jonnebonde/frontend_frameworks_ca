import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Hooks/CartContext";
import { CheckedOutContainer } from "./index.styles";

function CheckedOut() {
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "clearCart" });
  }, []);

  return (
    <CheckedOutContainer>
      <h1>Your order is succesfull and we thank you for your money</h1>
      <NavLink to="/">Go back to the home page</NavLink>
    </CheckedOutContainer>
  );
}

export default CheckedOut;
