import { CartContext } from "../../Hooks/CartContext";

import { useContext } from "react";

import { NavLink } from "react-router-dom";
import {
  CartContainer,
  CartItem,
  CartItemList,
  CheckoutButtonContainer,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemPrice,
  QuantityButton,
  QuantityControl,
  QuantityText,
  RemoveButton,
  TotalContainer,
} from "./index.styles";

const CheckoutPage = () => {
  const { cart, dispatch } = useContext(CartContext);

  const handleIncreaseQuantity = (product) => {
    dispatch({ type: "addProduct", payload: product });
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity === 1) {
      if (
        window.confirm(
          `Are you sure you want to remove ${product.data.name} from your cart?`,
        )
      ) {
        dispatch({ type: "removeProduct", payload: product });
      }
    } else {
      dispatch({ type: "decreaseQuantity", payload: product });
    }
  };

  const handleRemoveProduct = (product) => {
    if (
      window.confirm(
        `Are you sure you want to remove ${product.data.name} from your cart?`,
      )
    ) {
      dispatch({
        type: "removeProduct",
        payload: product,
      });
    }
  };

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cart.totalItems === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <CartItemList>
            {cart.cart.map((product) => (
              <CartItem key={product.data.id}>
                <ItemDetails>
                  <NavLink to={`/${product.data.id}`}>
                    <ItemImage
                      src={product.data.image.url}
                      alt={product.data.name}
                    />
                  </NavLink>
                  <div>
                    <ItemName>{product.data.name}</ItemName>
                    <ItemPrice>
                      ${product.data.discountedPrice.toFixed(2)}
                    </ItemPrice>
                  </div>
                </ItemDetails>
                <QuantityControl>
                  <QuantityButton
                    onClick={() => handleDecreaseQuantity(product)}
                  >
                    -
                  </QuantityButton>
                  <QuantityText>{product.quantity}</QuantityText>
                  <QuantityButton
                    onClick={() => handleIncreaseQuantity(product)}
                  >
                    +
                  </QuantityButton>
                  <RemoveButton onClick={() => handleRemoveProduct(product)}>
                    Remove
                  </RemoveButton>
                </QuantityControl>
              </CartItem>
            ))}
          </CartItemList>
          <TotalContainer>
            <p>Total: ${cart.total.toFixed(2)}</p>
            <p>Total Items: {cart.totalItems}</p>
          </TotalContainer>
          <CheckoutButtonContainer>
            <NavLink to={`/checkedout`}>Checkout</NavLink>
          </CheckoutButtonContainer>
        </>
      )}
    </CartContainer>
  );
};

export default CheckoutPage;
