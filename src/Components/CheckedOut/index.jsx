import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Hooks/CartHook";
import { CheckedOutContainer } from "./index.styles";

function CheckedOut() {
  document.title = "WeGotIt | Thank you for the money!";

  console.log("CheckedOut");

  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "clearCart" });
  }, []);

  return (
    <CheckedOutContainer>
      <h1>Thank you for your purchase!</h1>
      <NavLink to="/">Go back to the home page</NavLink>
    </CheckedOutContainer>
  );
}

export default CheckedOut;
