import { useEffect } from "react";
import CheckoutPage from "../../Components/CartList";

function CheckOutPage() {
  useEffect(() => {
    document.title = "WeGotIt | Checkout";
  }, []);

  return (
    <div>
      <CheckoutPage />
    </div>
  );
}

export default CheckOutPage;
