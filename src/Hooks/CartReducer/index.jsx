// This is the reducer for the cart. It will handle adding, removing, and clearing products in the cart.

function CartReducer(state, action) {
  let productIndex;
  let newTotal;
  let newTotalItems;
  let cart = state.cart;

  switch (action.type) {
    // Adding a product
    case "addProduct":
      // Create a new cart so we don't mutate our state
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.data.id === action.payload.data.id,
      );
      if (productIndex === -1) {
        // If productIndex is -1, it doesn't exist so we add it
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        // The product does exist so we increase the quantity
        // We do not want to mutate quantity so we are creating a new array with
        // quantity incremented.
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.data.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      newTotalItems = cart.reduce((currentTotal, product) => {
        currentTotal += product.quantity;
        return currentTotal;
      }, 0);

      return {
        ...state,
        cart: cart,
        total: newTotal,
        totalItems: newTotalItems,
      };

    // decrease quantity
    case "decreaseQuantity":
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.data.id === action.payload.data.id,
      );
      // If the product index is not -1 then it exists
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          // Remove 1 from quantity is quantity is higher than 1
          // We do not want to mutate cart so we recreate it
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          // Remove the item entirely if quantity is going to be 0

          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.data.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      newTotalItems = cart.reduce((currentTotal, product) => {
        currentTotal += product.quantity;
        return currentTotal;
      }, 0);

      return {
        ...state,
        cart: cart,
        total: newTotal,
        totalItems: newTotalItems,
      };

    case "removeProduct":
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.data.id === action.payload.data.id,
      );
      // If the product index is not -1 then it exists
      if (productIndex !== -1) {
        // Remove the item entirely
        cart = [
          ...cart.slice(0, productIndex),
          ...cart.slice(productIndex + 1),
        ];
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.data.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      newTotalItems = cart.reduce((currentTotal, product) => {
        currentTotal += product.quantity;
        return currentTotal;
      }, 0);

      return {
        ...state,
        cart: cart,
        total: newTotal,
        totalItems: newTotalItems,
      };

    // Clearing a cart
    case "clearCart":
      return { cart: [], total: 0, totalItems: 0 };

    default:
      return state;
  }
}

export default CartReducer;

// credit to the example delivered from noroff, i made some adjustments to fit my project.
