import CheckedOut from "../../Components/CheckedOut";
import { useEffect } from "react";

function CheckOutSuccessPage() {
  useEffect(() => {
    document.title = "WeGotIt | Thank you for the money!";
  }, []);

  return (
    <div>
      <CheckedOut />
    </div>
  );
}

export default CheckOutSuccessPage;
