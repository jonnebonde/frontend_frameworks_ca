import { useContext } from "react";
import { CartContext } from "../../Cart/CartHook/CartContext";

function CartHook(data) {
  const { cart, dispatch } = useContext(CartContext);

  console.log(cart);

  return (
    <>
      <button onClick={() => dispatch({ type: "addProduct", payload: data })}>
        Add to Cart
      </button>
    </>
  );
}

export default CartHook;
